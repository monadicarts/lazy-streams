/** Interface for the core LazyStream methods */
interface ILazyStream<T> {
  map<U>(fn: (value: T) => U): ILazyStream<U>;
  filter(fn: (value: T) => boolean): ILazyStream<T>;
  take(n: number): ILazyStream<T>;
  toArray(): T[];
}

export type { ILazyStream };
