import { Plus, Trash } from "@phosphor-icons/react";
import Button from "../Button";

import { ButtonSizes, ButtonVariants } from "../Button/types";

const Tasks = () => {
  return (
    <div className="w-full border px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas tarefas</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant={ButtonVariants["GHOST"]}
            size={ButtonSizes["SMALL"]}
            icon={<Trash weight="bold" />}
          >
            Limpar tarefa
          </Button>
          <Button size={ButtonSizes["SMALL"]} icon={<Plus weight="bold" />}>
            Nova tarefa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
