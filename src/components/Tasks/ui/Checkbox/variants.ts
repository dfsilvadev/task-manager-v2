import { cva } from "class-variance-authority";

export const checkboxStyles = cva(
  "relative flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm  text-white",
  {
    variants: {
      status: {
        completed: "bg-[#00ADB5]",
        in_progress: "bg-[#FFAA04]",
        not_started: "bg-[#D9D9D9]",
      },
    },
  }
);
