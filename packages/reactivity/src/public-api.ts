import { buildContext } from './context/context';
import { buildEffect } from './effect/effect';
import { buildMemo } from './memo/memo';
import { buildSignal } from './signal/signal';
import { buildUntrack } from './untrack/untrack';

const context = buildContext();

export const signal = buildSignal({ context });

export const effect = buildEffect({ context });

export const memo = buildMemo({ signal, effect });

export const untrack = buildUntrack({ context });
