import { describe, expect, test } from "vitest";

import { context } from "../shared";

import { untrack } from "./untrack";

describe("untrack", () => {
  test("context length in untrack function", () => {
    expect(context.length).toBe(0);
    context.push({
      dependencies: new Set(),
      execute() {
        console.log("test");
      },
    });
    expect(context.length).toBe(1);

    untrack(() => {
      expect(context.length).toBe(0);
    });
    expect(context.length).toBe(1);
  });
});
