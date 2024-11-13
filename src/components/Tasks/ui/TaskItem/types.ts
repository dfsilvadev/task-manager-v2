import { Task, TaskStatus } from "../../model/tasks";

export type Dependencies = {
  readonly task: Task;
  readonly handleToggleStatus: (id: number, status: TaskStatus) => void;
  readonly handleToggleModal: (row: Task) => void;
};
