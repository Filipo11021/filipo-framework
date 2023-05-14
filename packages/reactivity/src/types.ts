export type Dependency = Set<Subscriber>;

export type Subscriber = {
	execute(): void;
	dependencies: Set<Dependency>;
};
