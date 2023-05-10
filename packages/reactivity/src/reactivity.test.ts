import { describe, expect, test } from "vitest";
import { signal } from "./signal/signal";
import { effect } from "./effect/effect";

describe("effect + signal", () => {
  test("reaction to set new value", () => {
    const [value, setValue] = signal(0);
    let currentValue = value();

    effect(() => {
      currentValue = value();
    });

    setValue(5);
    expect(currentValue).toBe(5);
  });
});
