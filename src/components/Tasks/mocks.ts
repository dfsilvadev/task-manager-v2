import { Task, TaskStatus, TaskSchedule } from "./model/tasks";

export const tasks: Task[] = [
  {
    id: 1,
    title: "Estudar ReactJS",
    description: "Estudar os fundamentos do ReactJS",
    status: TaskStatus.COMPLETED,
    schedule: TaskSchedule.MORNING,
  },
  {
    id: 2,
    title: "Estudar React Native",
    description: "Estudar os fundamentos do React Native",
    status: TaskStatus.IN_PROGRESS,
    schedule: TaskSchedule.AFTERNOON,
  },
  {
    id: 3,
    title: "Estudar TypeScript",
    description: "Estudar os fundamentos do TypeScript",
    status: TaskStatus.NOT_STARTED,
    schedule: TaskSchedule.NIGHT,
  },
];
