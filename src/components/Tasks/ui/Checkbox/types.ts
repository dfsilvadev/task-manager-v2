import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export type Dependencies = {
  status: "not_started" | "in_progress" | "completed";
} & InputProps;
