import { ReactElement, ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { ButtonVariants } from "../Button/types";

export type Dependencies = {
  readonly children: ReactNode;
  readonly trigger?: ReactElement;
  readonly options: {
    readonly title?: string;
    readonly closeButton: {
      readonly showCloseButton?: boolean;
      readonly disabled?: boolean;
      readonly closeButtonLabel?: string;
      readonly closeButtonVariant?: ButtonVariants;
      readonly handleOnClick?: () => void;
    };
    readonly backButton: {
      readonly showBackButton?: boolean;
      readonly backButtonLabel?: string;
    };
  };
} & Dialog.DialogProps;
