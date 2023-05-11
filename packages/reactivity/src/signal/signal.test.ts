import { describe, expect, test } from "vitest";

import { signal } from "./signal";

describe("create and update signals", () => {
  test("create signal", () => {
    const [value] = signal(5);

    expect(value()).toBe(5);
  });

  test("update signal", () => {
    const [value, setValue] = signal(5);
    setValue(value() + 10);

    expect(value()).toBe(15);
  });

  test("update signal with function", () => {
    const [value, setValue] = signal(5);
    setValue((v) => v + 10);

    expect(value()).toBe(15);
  });

  test("multiple updates with function", () => {
    const [value, setValue] = signal(0);

    setValue((v) => v + 1);
    expect(value()).toBe(1);

    setValue((v) => v + 5);
    expect(value()).toBe(6);

    setValue((v) => v + 10);
    expect(value()).toBe(16);
  });
});
