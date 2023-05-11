import { describe, expect, test } from "vitest";

import { context } from "../shared";

import { effect } from "./effect";

describe("effect", () => {
  test("create effect", () => {
    let check = false;
    effect(() => {
      check = true;
    });

    expect(check).toBe(true);
  });

  test("context length in effect function", () => {
    expect(context.length).toBe(0);

    effect(() => {
      expect(context.length).toBe(1);
    });

    expect(context.length).toBe(0);
  });

  test("nested effects", () => {
    expect(context.length).toBe(0);

    effect(() => {
      expect(context.length).toBe(1);

      effect(() => {
        expect(context.length).toBe(2);

        effect(() => {
          expect(context.length).toBe(3);
        });
      });

      expect(context.length).toBe(1);
    });

    expect(context.length).toBe(0);
  });
});
