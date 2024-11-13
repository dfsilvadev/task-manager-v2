import { Dependencies } from "./types";

const Header = ({ children, icon }: Dependencies) => {
  return (
    <header className="border-b border-solid border-brand-border pb-1">
      <span className="flex items-center gap-2 text-brand-text-gray">
        {!!icon && icon}
        <h4 className="text-sm">{children}</h4>
      </span>
    </header>
  );
};

export default Header;
