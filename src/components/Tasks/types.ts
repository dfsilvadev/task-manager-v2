import { Task } from "./model/tasks";

type Schedule = "morning" | "afternoon" | "evening";

export type TasksBySchedule<I, V> = {
  [K in Schedule]: Map<I, V>;
};

export type ModalOptions = {
  show: boolean;
  row: Task | null;
};
