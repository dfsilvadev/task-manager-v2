import { AnchorHTMLAttributes, ReactNode } from "react";

import { cva } from "class-variance-authority";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export enum ButtonVariants {
  DEFAULT = "default",
  ACTIVE = "active",
}

export type Dependencies = {
  readonly children: ReactNode;
  readonly variant?: ButtonVariants;
  readonly icon?: ReactNode;
} & LinkProps;

const buttonVariantsStyles = cva(
  "flex items-center gap-x-4 px-6 py-3 text-sm",
  {
    variants: {
      variant: {
        [ButtonVariants.DEFAULT]: "text-[#35383E]",
        [ButtonVariants.ACTIVE]: "rounded-lg bg-[#E6F7FB] text-[#00ADB5] ",
      },
    },
    defaultVariants: {
      variant: ButtonVariants.DEFAULT,
    },
  }
);

export { buttonVariantsStyles };
