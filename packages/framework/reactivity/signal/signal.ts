import { context } from "../shared";

type NewValue<Value> = Value | ((prevValue: Value) => Value);

export function signal<Value>(initialValue: Value) {
  let currentValue = initialValue;
  const subscribers = new Set<Subscriber>();

  function getter() {
    const current = context.at(-1);
    if (current) subscribers.add(current);

    return currentValue;
  }

  function setter(newValue: NewValue<Value>) {
    currentValue =
      newValue instanceof Function ? newValue(currentValue) : newValue;

    subscribers.forEach((sub) => sub());
  }

  return [getter, setter] as const;
}
