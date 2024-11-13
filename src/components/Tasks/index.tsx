import { useMemo } from "react";
import { Moon, Plus, Sun, SunHorizon, Trash } from "@phosphor-icons/react";

import Button from "../Button";
import { Header, TaskItem } from "./ui";

import useMap from "@/hooks/useMap";

import { tasks } from "./mocks";

import { ButtonSizes, ButtonVariants } from "../Button/types";
import { Task, TaskStatus } from "./model/tasks";
import { TasksBySchedule } from "./types";

const Tasks = () => {
  const [map, { set, remove }] = useMap<number, Task>({
    tasks,
    key: (task) => task.id,
  });

  const toggleStatus = {
    [TaskStatus.COMPLETED]: TaskStatus.NOT_STARTED,
    [TaskStatus.IN_PROGRESS]: TaskStatus.COMPLETED,
    [TaskStatus.NOT_STARTED]: TaskStatus.IN_PROGRESS,
  };

  const toggleTaskStatus = (taskId: number, taskStatus: TaskStatus): void => {
    const nextTask = map.get(taskId);
    if (!nextTask) return;

    const newStatus = toggleStatus[taskStatus];
    set(taskId, { ...nextTask, status: newStatus });
  };

  const deleteTask = (taskId: number): void => {
    remove(taskId);
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

          {[...groupTasksByDaySchedule.morning.values()].map((task) => (
            <TaskItem
              key={task.id}
              {...{ task }}
              handleToggleTaskStatus={toggleTaskStatus}
              handleDeleteTask={deleteTask}
            />
          ))}
        </div>

        <div className="space-y-3">
          <Header icon={<SunHorizon />}>Tarde</Header>

          {[...groupTasksByDaySchedule.afternoon.values()].map((task) => (
            <TaskItem
              key={task.id}
              {...{ task }}
              handleToggleTaskStatus={toggleTaskStatus}
              handleDeleteTask={deleteTask}
            />
          ))}
        </div>

        <div className="space-y-3">
          <Header icon={<Moon />}>Noite</Header>

          {[...groupTasksByDaySchedule.evening.values()].map((task) => (
            <TaskItem
              key={task.id}
              {...{ task }}
              handleToggleTaskStatus={toggleTaskStatus}
              handleDeleteTask={deleteTask}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
