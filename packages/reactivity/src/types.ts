export type Dependency = Set<Subscriber>;

export interface Subscriber {
	execute(): void;
	dependencies: Set<Dependency>;
}

export interface Context {
	getAll: () => Subscriber[];
	push: (subscriber: Subscriber) => void;
	pop: () => void;
	clear: () => void;
	set: (subscribers: Subscriber[]) => void;
	getCurrent: () => Subscriber;
	size: () => number;
}

export type NewValue<Value> = Value | ((prevValue: Value) => Value);
export type Signal<Value> = Readonly<
	[() => Value, (newValue: NewValue<Value>) => void]
>;
export type SignalFn = <Value>(initialValue: Value) => Signal<Value>;

export type EffectFn = (fn: () => void) => void;
