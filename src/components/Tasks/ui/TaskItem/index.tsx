import { ArrowSquareOut } from "@phosphor-icons/react";

import Checkbox from "../Checkbox";

import { taskItemStyles } from "./variants";

import { Dependencies } from "./types";

const TaskItem = ({ task, handleOnClick }: Dependencies) => {
  return (
    <div className={taskItemStyles({ status: task.status })}>
      <div className="flex items-center gap-2">
        <Checkbox
          {...{ status: task.status }}
          onClick={() => handleOnClick(task.id, task.status)}
        />

        {task.title}
      </div>

      <a className="text-[#9A9C9F] transition hover:text-[#00ADB5]">
        <ArrowSquareOut size={20} />
      </a>
    </div>
  );
};

export default TaskItem;
