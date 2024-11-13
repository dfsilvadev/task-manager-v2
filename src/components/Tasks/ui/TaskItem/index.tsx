import { ArrowSquareOut, Trash } from "@phosphor-icons/react";

import Checkbox from "../Checkbox";

import { taskItemStyles } from "./variants";

import { Dependencies } from "./types";

const TaskItem = ({
  task,
  handleToggleStatus,
  handleToggleModal,
}: Dependencies) => {
  return (
    <div className={taskItemStyles({ status: task.status })}>
      <div className="flex items-center gap-2">
        <Checkbox
          {...{ status: task.status }}
          onClick={() => handleToggleStatus(task.id, task.status)}
        />

        {task.title}
      </div>

      <div className="flex items-center justify-center gap-4 px-4 text-[#9A9C9F] transition">
        <button type="button" onClick={() => handleToggleModal(task)}>
          <Trash size={20} className="hover:text-[#EF4444]" />
        </button>

        <a className="transition hover:text-[#00ADB5]">
          <ArrowSquareOut size={20} />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;
