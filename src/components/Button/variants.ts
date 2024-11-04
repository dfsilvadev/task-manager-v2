import { cva } from "class-variance-authority";

import { ButtonSizes, ButtonVariants } from "./types";

export const buttonVariantsStyles = cva(
  "flex items-center gap-1 rounded-md bg-[#00ADB5] px-3 py-1 text-xs font-semibold transition",
  {
    variants: {
      variant: {
        [ButtonVariants.PRIMARY]:
          "bg-[#00ADB5] text-white hover:bg-[#00acb5c4]",
        [ButtonVariants.GHOST]:
          "bg-transparent text-[#818181] hover:bg-[#EEEEEE]",
        [ButtonVariants.DANGER]: "bg-[#EF4444] text-white hover:bg-[#ef4444cd]",
        [ButtonVariants.NEUTRAL]: "bg-[#EEEEEE] text-[#35383E]",
      },
      size: {
        [ButtonSizes.SMALL]: "px-2 py-1",
        [ButtonSizes.MEDIUM]: "px-6 py-2",
      },
    },
  }
);
