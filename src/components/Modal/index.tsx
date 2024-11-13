import * as Dialog from "@radix-ui/react-dialog";
import { X, WarningOctagon } from "@phosphor-icons/react";

import Button from "../Button";

import { ButtonVariants } from "../Button/types";
import { Dependencies } from "./types";

const Modal = ({
  children,
  trigger,
  options: {
    title = "Dialog Title",
    closeButton: {
      showCloseButton = true,
      disabled = false,
      closeButtonLabel = "Confirmar",
      closeButtonVariant = ButtonVariants.PRIMARY,
      handleOnClick = () => {},
    },
    backButton: { showBackButton = true, backButtonLabel = "Cancelar" },
  },
  ...props
}: Dependencies) => {
  return (
    <Dialog.Root {...props}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-brand-dark-blue/60 backdrop-blur-sm" />

        <Dialog.Content className="fixed left-2/4 top-2/4 w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-brand-white p-6">
          <header className="flex items-center justify-between">
            <Dialog.Title>{title}</Dialog.Title>
            <Dialog.Close className="text-brand-text-gray hover:text-brand-danger">
              <X weight="bold" />
            </Dialog.Close>
          </header>

          <Dialog.Description className="mx-3 mb-0 mt-3 flex items-center gap-2 text-sm text-brand-text-gray">
            <WarningOctagon
              size={20}
              weight="bold"
              className="text-brand-process"
            />
            {children}
          </Dialog.Description>

          <footer className="flex items-center justify-end gap-2 pt-4">
            {showBackButton && (
              <Dialog.Close asChild>
                <Button variant={ButtonVariants.GHOST}>
                  {backButtonLabel}
                </Button>
              </Dialog.Close>
            )}

            {showCloseButton && (
              <Dialog.Close asChild>
                <Button
                  variant={closeButtonVariant}
                  disabled={disabled}
                  onClick={handleOnClick}
                >
                  {closeButtonLabel}
                </Button>
              </Dialog.Close>
            )}
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
