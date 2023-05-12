import { effect } from "@filipo/reactivity";

import type { Child } from "./types";

export function applyChild(
  element: HTMLElement | DocumentFragment,
  child: Child
) {

  if (typeof child === "function") {
    const text = document.createTextNode(String(child()));

    effect(() => {
      if (child) text.textContent = String(child());
    });

    element.append(text);
    return;
  }

  if (child instanceof HTMLElement || child instanceof DocumentFragment) {
    element.append(child);
    return;
  }

  element.append(String(child));
}

export function applyChildren(
  element: HTMLElement | DocumentFragment,
  children: Child[]
) {
  for (const child of children) {
    if (Array.isArray(child)) {
      applyChildren(element, child);

      continue;
    }

    applyChild(element, child);
  }
}
