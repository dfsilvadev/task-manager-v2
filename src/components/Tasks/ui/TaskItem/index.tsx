/* eslint-disable no-constant-binary-expression */
import { ArrowSquareOut } from "@phosphor-icons/react";

import Checkbox from "../Checkbox";

import { taskItemStyles } from "./variants";

import { Dependencies } from "./types";

const TaskItem = ({ title, status = "not_started" }: Dependencies) => {
  return (
    <div className={taskItemStyles({ status })}>
      <div className="flex items-center gap-2">
        <Checkbox {...{ status }} />

        {title}
      </div>

      <a className="text-[#9A9C9F] transition hover:text-[#00ADB5]">
        <ArrowSquareOut size={20} />
      </a>
    </div>
  );
};

export default TaskItem;
