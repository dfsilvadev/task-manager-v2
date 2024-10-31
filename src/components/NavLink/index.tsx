import { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>;

type Variants = "default" | "active";

type Dependencies = {
  readonly children: ReactNode;
  readonly variant?: Variants;
  readonly icon?: ReactNode;
} & LinkProps;

const Link = ({
  children,
  variant = "default",
  icon,
  ...props
}: Dependencies) => {
  const status: { [key in Variants]: string } = {
    default: "text-[#35383E]",
    active: "rounded-lg bg-[#E6F7FB] text-[#00ADB5] ",
  };

  return (
    <a
      className={`flex items-center gap-x-4 px-6 py-3 ${status[variant]}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0 text-2xl">{icon}</span>}
      {children}
    </a>
  );
};

export default Link;
