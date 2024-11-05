import { LinkVariantsStyles } from "./variants";

import { Dependencies, LinkVariants } from "./types";

const Link = ({
  children,
  variant = LinkVariants.DEFAULT,
  icon,
  ...props
}: Dependencies) => {
  return (
    <a className={LinkVariantsStyles({ variant })} {...props}>
      {icon && <span className="flex-shrink-0 text-2xl">{icon}</span>}
      {children}
    </a>
  );
};

export default Link;
