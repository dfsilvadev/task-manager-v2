import { cva } from "class-variance-authority";

export const checkboxStyles = cva(
  "relative flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm  text-brand-white",
  {
    variants: {
      status: {
        completed: "bg-brand-primary",
        in_progress: "bg-brand-process",
        not_started: "bg-brand-text-gray",
      },
    },
  }
);
