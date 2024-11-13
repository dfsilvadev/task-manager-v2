import { Task, TaskStatus } from "../../model/tasks";

export type Dependencies = {
  readonly task: Task;
  readonly handleOnClick: (id: number, status: TaskStatus) => void;
};
