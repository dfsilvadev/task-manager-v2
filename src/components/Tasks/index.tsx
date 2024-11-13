import { useMemo, useState } from "react";
import {
  Clipboard,
  Moon,
  Plus,
  Sun,
  SunHorizon,
  Trash,
} from "@phosphor-icons/react";
import { toast } from "sonner";

import Button from "../Button";
import Modal from "../Modal";
import { Header, TaskItem } from "./ui";

import useMap from "@/hooks/useMap";

import { tasks } from "./mocks";

import { ButtonSizes, ButtonVariants } from "../Button/types";
import { Task, TaskStatus } from "./model/tasks";
import { ModalOptions, TasksBySchedule } from "./types";

const initialState = {
  show: false,
  row: null,
};

const toggleStatus = {
  [TaskStatus.COMPLETED]: TaskStatus.NOT_STARTED,
  [TaskStatus.IN_PROGRESS]: TaskStatus.COMPLETED,
  [TaskStatus.NOT_STARTED]: TaskStatus.IN_PROGRESS,
};

const Tasks = () => {
  const [modal, setModal] = useState<ModalOptions>(initialState);

  const [map, { set, remove }] = useMap<number, Task>({
    tasks,
    key: (task) => task.id,
  });

  const toggleModal = (row: Task): void => {
    setModal(() => ({ show: true, row }));
  };

  const toggleTaskStatus = (id: number, status: TaskStatus): void => {
    const nextTask = map.get(id);

    if (!nextTask) return;

    const newStatus = toggleStatus[status];
    set(id, { ...nextTask, status: newStatus });
  };

  const deleteTask = (): void => {
    const { row } = modal;
    if (!row) return;

    remove(row.id);
    setModal(initialState);
    toast.success("Tarefa deletada com sucesso!");
  };

  const groupTasksByDaySchedule = useMemo(() => {
    const list = [...map.values()];

    const tasksBySchedule: TasksBySchedule<number, Task> = {
      morning: new Map(),
      afternoon: new Map(),
      evening: new Map(),
    };

    return list.reduce((acc, task) => {
      acc[task.schedule].set(task.id, task);
      return acc;
    }, tasksBySchedule);
  }, [map]);

  return (
    <>
      <div className="w-full space-y-6 px-8 py-16">
        <div className="flex w-full justify-between">
          <div>
            <span className="text-xs font-semibold text-[#00ADB5]">
              Minhas tarefas
            </span>
            <h2 className="text-xl font-semibold">Minhas tarefas</h2>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant={ButtonVariants["GHOST"]}
              size={ButtonSizes["SMALL"]}
              icon={<Trash weight="bold" />}
            >
              Limpar tarefas
            </Button>
            <Button size={ButtonSizes["SMALL"]} icon={<Plus weight="bold" />}>
              Nova tarefa
            </Button>
          </div>
        </div>

        <div className="space-y-6 rounded-lg bg-white p-6">
          <div className="space-y-3">
            <Header icon={<Sun />}>Manhã</Header>

            {[...groupTasksByDaySchedule.morning.values()].length === 0 ? ( //TODO: refatorar map de tarefas
              // TODO: criar um componente de tarefa vazia
              <div className="flex items-center gap-2 text-[#9A9C9F]">
                <Clipboard size={20} weight="bold" />
                <p className="text-xs">
                  Nenhuma tarefa cadastrada para esse período.
                </p>
              </div>
            ) : (
              [...groupTasksByDaySchedule.morning.values()].map((task) => (
                <TaskItem
                  key={task.id}
                  {...{ task }}
                  handleToggleStatus={toggleTaskStatus}
                  handleToggleModal={toggleModal}
                />
              ))
            )}
          </div>

          <div className="space-y-3">
            <Header icon={<SunHorizon />}>Tarde</Header>

            {[...groupTasksByDaySchedule.afternoon.values()].length === 0 ? (
              <div className="flex items-center gap-2 text-[#9A9C9F]">
                <Clipboard size={20} weight="bold" />
                <p className="text-xs">
                  Nenhuma tarefa cadastrada para esse período.
                </p>
              </div>
            ) : (
              [...groupTasksByDaySchedule.afternoon.values()].map((task) => (
                <TaskItem
                  key={task.id}
                  {...{ task }}
                  handleToggleStatus={toggleTaskStatus}
                  handleToggleModal={toggleModal}
                />
              ))
            )}
          </div>

          <div className="space-y-3">
            <Header icon={<Moon />}>Noite</Header>

            {[...groupTasksByDaySchedule.evening.values()].length === 0 ? (
              <div className="flex items-center gap-2 text-[#9A9C9F]">
                <Clipboard size={20} weight="bold" />
                <p className="text-xs">
                  Nenhuma tarefa cadastrada para esse período.
                </p>
              </div>
            ) : (
              [...groupTasksByDaySchedule.evening.values()].map((task) => (
                <TaskItem
                  key={task.id}
                  {...{ task }}
                  handleToggleStatus={toggleTaskStatus}
                  handleToggleModal={toggleModal}
                />
              ))
            )}
          </div>
        </div>
      </div>

      <Modal
        open={modal.show}
        onOpenChange={() => setModal(initialState)}
        options={{
          title: "Deletar tarefa",
          closeButton: {
            handleOnClick: deleteTask,
            closeButtonLabel: "Deletar",
            closeButtonVariant: ButtonVariants.DANGER,
          },
          backButton: {},
        }}
      >
        Deseja excluir a tarefa "{modal.row?.title}"?
      </Modal>
    </>
  );
};

export default Tasks;
