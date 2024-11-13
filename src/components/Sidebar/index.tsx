import { ClipboardText, House } from "@phosphor-icons/react";

import NavLink from "./ui/NavLink/";

import { LinkVariants } from "./ui/NavLink/types";

const Sidebar = () => {
  return (
    <div className="h-screen w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">Task Manager</h1>
        <p className="text-xs">
          Organize suas{" "}
          <span className="font-semibold text-[#00ADB5]">tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <NavLink href="#" variant={LinkVariants["ACTIVE"]} icon={<House />}>
          Início
        </NavLink>
        <NavLink href="#" icon={<ClipboardText />}>
          Minhas tarefas
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
