import { context, setContext } from "../shared";

export function untrack<Value>(fn: () => Value) {
  const prevContext = context;
  setContext([]);
  const res = fn();
  setContext(prevContext);
  return res;
}
