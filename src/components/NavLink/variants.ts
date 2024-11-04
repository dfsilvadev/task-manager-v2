import { cva } from "class-variance-authority";
import { LinkVariants } from "./types";

export const LinkVariantsStyles = cva(
  "flex items-center gap-x-4 px-6 py-3 text-sm",
  {
    variants: {
      variant: {
        [LinkVariants.DEFAULT]: "text-[#35383E]",
        [LinkVariants.ACTIVE]: "rounded-lg bg-[#E6F7FB] text-[#00ADB5] ",
      },
    },
    defaultVariants: {
      variant: LinkVariants.DEFAULT,
    },
  }
);
