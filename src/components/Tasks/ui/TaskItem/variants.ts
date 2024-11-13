import { cva } from "class-variance-authority";

export const taskItemStyles = cva(
  "flex items-center justify-between rounded-lg bg-opacity-10 p-3 text-sm transition",
  {
    variants: {
      status: {
        completed: "text=[#002C2E] bg-[#00ADB5] ",
        in_progress: "bg-[#FFAA04] text-[#FFAA04]",
        not_started: "bg-[#9A9C9F] text-[#35383E]",
      },
    },
  }
);
