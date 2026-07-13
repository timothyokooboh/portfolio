import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type StatefulClassName<State> =
  | string
  | ((state: State) => string | undefined)
  | undefined;

export function resolveStatefulClassName<State>(
  className: StatefulClassName<State>,
  state: State,
) {
  return typeof className === "function" ? className(state) : className;
}
