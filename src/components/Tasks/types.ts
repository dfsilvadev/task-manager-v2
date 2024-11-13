type Schedule = "morning" | "afternoon" | "evening";

export type TasksBySchedule<I, V> = {
  [K in Schedule]: Map<I, V>;
};
