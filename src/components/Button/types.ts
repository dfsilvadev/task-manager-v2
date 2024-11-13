import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export enum ButtonVariants {
  PRIMARY = "primary",
  GHOST = "ghost",
  DANGER = "danger",
  NEUTRAL = "neutral",
}

export enum ButtonSizes {
  SMALL = "sm",
  MEDIUM = "md",
}

export type Dependencies = {
  readonly children: ReactNode;
  readonly variant?: ButtonVariants;
  readonly size?: ButtonSizes;
  readonly icon?: ReactNode;
} & ButtonProps;
