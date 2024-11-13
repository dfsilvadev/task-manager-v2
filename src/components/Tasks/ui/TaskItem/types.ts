import { Task, TaskStatus } from "../../model/tasks";

export type Dependencies = {
  readonly task: Task;
  readonly handleToggleTaskStatus: (id: number, status: TaskStatus) => void;
  readonly handleDeleteTask: (id: number) => void;
};
