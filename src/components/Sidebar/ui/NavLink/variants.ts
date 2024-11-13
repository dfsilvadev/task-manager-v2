import { cva } from "class-variance-authority";
import { LinkVariants } from "./types";

export const LinkVariantsStyles = cva(
  "flex items-center gap-x-4 px-6 py-3 text-sm",
  {
    variants: {
      variant: {
        [LinkVariants.DEFAULT]: "text-brand-dark-blue",
        [LinkVariants.ACTIVE]:
          "rounded-lg bg-brand-background text-brand-primary ",
      },
    },
    defaultVariants: {
      variant: LinkVariants.DEFAULT,
    },
  }
);
