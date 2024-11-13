import { cva } from "class-variance-authority";

import { ButtonSizes, ButtonVariants } from "./types";

export const buttonVariantsStyles = cva(
  "flex items-center gap-1 rounded-md bg-brand-primary px-3 py-1 text-xs font-semibold transition",
  {
    variants: {
      variant: {
        [ButtonVariants.PRIMARY]:
          "bg-brand-primary text-brand-white hover:bg-[#00acb5c4]",
        [ButtonVariants.GHOST]:
          "bg-transparent text-brand-dark-gray hover:bg-brand-light-gray",
        [ButtonVariants.DANGER]:
          "bg-brand-danger text-brand-white hover:bg-[#ef4444cd]",
        [ButtonVariants.NEUTRAL]: "bg-brand-light-gray text-brand-dark-blue",
      },
      size: {
        [ButtonSizes.SMALL]: "px-2 py-1",
        [ButtonSizes.MEDIUM]: "px-6 py-2",
      },
    },
  }
);
