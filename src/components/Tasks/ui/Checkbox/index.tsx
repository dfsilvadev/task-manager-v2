import { forwardRef, ForwardRefRenderFunction, useMemo } from "react";
import { Check, CircleNotch } from "@phosphor-icons/react";

import { checkboxStyles } from "./variants";

import { Dependencies } from "./types";

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, Dependencies> = (
  { status, ...props },
  ref
) => {
  const icon = useMemo(
    () => ({
      completed: <Check weight="bold" />,
      in_progress: <CircleNotch className="animate-spin" weight="bold" />,
    }),
    []
  );

  return (
    <label className={checkboxStyles({ status })}>
      <input
        type="checkbox"
        className="absolute h-full w-full cursor-pointer opacity-0"
        ref={ref}
        {...props}
      />

      {icon[status as keyof typeof icon]}
    </label>
  );
};

export default forwardRef(Checkbox);
