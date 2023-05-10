import { effect } from "../effect/effect";
import { signal } from "../signal/signal";

export function memo<Value>(fn: () => Value) {
  const [value, setValue] = signal(fn());
  let skip = true;

  effect(() => {
    if (skip) return (skip = false);
    setValue(fn());
  });

  return value;
}
