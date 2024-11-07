export enum TaskSchedule {
  MORNING = "morning",
  AFTERNOON = "afternoon",
  NIGHT = "night",
}

export enum TaskStatus {
  COMPLETED = "completed",
  IN_PROGRESS = "in_progress",
  NOT_STARTED = "not_started",
}

export interface Task {
  readonly id: number;
  readonly title: string;
  readonly description: string;
  readonly status: TaskStatus;
  readonly schedule: TaskSchedule;
}
