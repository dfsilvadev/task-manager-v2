import { buttonVariantsStyles } from "./variants";

import { ButtonSizes, ButtonVariants, Dependencies } from "./types";

const Button = ({
  children,
  icon,
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.MEDIUM,
  ...props
}: Dependencies) => {
  return (
    <button {...props} className={buttonVariantsStyles({ variant, size })}>
      {children}
      {icon && <span className="flex-shrink-0 text-lg">{icon}</span>}
    </button>
  );
};

export default Button;
