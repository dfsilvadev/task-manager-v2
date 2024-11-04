import { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export enum LinkVariants {
  DEFAULT = "default",
  ACTIVE = "active",
}

export type Dependencies = {
  readonly children: ReactNode;
  readonly variant?: LinkVariants;
  readonly icon?: ReactNode;
} & LinkProps;
