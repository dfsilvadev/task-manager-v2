import { Dependencies } from "./types";

const Header = ({ children, icon }: Dependencies) => {
  return (
    <header className="border-b border-solid border-[#F4F4F5] pb-1">
      <span className="flex items-center gap-2 text-[#9A9C9F]">
        {!!icon && icon}
        <h4 className="text-sm">{children}</h4>
      </span>
    </header>
  );
};

export default Header;
