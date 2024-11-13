import { cva } from "class-variance-authority";

export const taskItemStyles = cva(
  "flex items-center justify-between rounded-lg bg-opacity-10 p-3 text-sm transition",
  {
    variants: {
      status: {
        completed: "text-brand-dark-green bg-brand-primary ",
        in_progress: "bg-brand-process text-brand-process",
        not_started: "bg-brand-text-gray text-brand-dark-blue",
      },
    },
  }
);
