import { useMemo, useState } from "react";
import { Moon, Plus, Sun, SunHorizon, Trash } from "@phosphor-icons/react";

import Button from "../Button";
import { Header, TaskItem } from "./ui";

import { tasks } from "./mocks";

import { ButtonSizes, ButtonVariants } from "../Button/types";
import { Task } from "./model/tasks";

const Tasks = () => {
  const [task] = useState<Task[]>(tasks);

  const groupTasksByDaySchedule = useMemo(
    () =>
      tasks.reduce(
        (acc, task) => {
          if (!acc[task.schedule]) {
            acc[task.schedule] = [];
          }
          acc[task.schedule].push(task);
          return acc;
        },
        {
          morning: [] as Task[],
          afternoon: [] as Task[],
          night: [] as Task[],
        }
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [task]
  );

  return (
    <div className="w-full space-y-6 border px-8 py-16">
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
            Limpar tarefa
          </Button>
          <Button size={ButtonSizes["SMALL"]} icon={<Plus weight="bold" />}>
            Nova tarefa
          </Button>
        </div>
      </div>

      <div className="space-y-6 rounded-lg bg-white p-6">
        <div className="space-y-3">
          <Header icon={<Sun />}>Manhã</Header>

          {groupTasksByDaySchedule.morning.map(({ title, status, id }) => (
            <TaskItem key={id} {...{ title, status }} />
          ))}
        </div>

        <div className="space-y-3">
          <Header icon={<SunHorizon />}>Tarde</Header>

          {groupTasksByDaySchedule.afternoon.map(({ title, status, id }) => (
            <TaskItem key={id} {...{ title, status }} />
          ))}
        </div>

        <div className="space-y-3">
          <Header icon={<Moon />}>Noite</Header>

          {groupTasksByDaySchedule.night.map(({ title, status, id }) => (
            <TaskItem key={id} {...{ title, status }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
