import { ButtonVariants, buttonVariantsStyles, Dependencies } from "./variants";

const Link = ({
  children,
  variant = ButtonVariants.DEFAULT,
  icon,
  ...props
}: Dependencies) => {
  return (
    <a className={buttonVariantsStyles({ variant })} {...props}>
      {icon && <span className="flex-shrink-0 text-2xl">{icon}</span>}
      {children}
    </a>
  );
};

export default Link;
