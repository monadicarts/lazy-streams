/**
 * @module LazyStream
 * Provides a simple implementation of a lazy evaluation stream in TypeScript.
 */

/** Interface for the core LazyStream methods */
export interface ILazyStream<T> {
  map<U>(fn: (value: T) => U): LazyStream<U>;
  filter(fn: (value: T) => boolean): LazyStream<T>;
  take(n: number): LazyStream<T>;
  toArray(): T[];
}

/** A class representing a lazy evaluation stream */
export class LazyStream<T> implements ILazyStream<T> {
  private generator: () => Generator<T>;

  constructor(generator: () => Generator<T>) {
    this.generator = generator;
  }

  /** Creates a LazyStream from an iterable */
  static from<U>(iterable: Iterable<U>): LazyStream<U> {
    return new LazyStream(function* () {
      for (const item of iterable) {
        yield item;
      }
    });
  }

  /** Maps each element to a new value based on the provided function */
  map<U>(fn: (value: T) => U): LazyStream<U> {
    const generator = this.generator;
    return new LazyStream(function* () {
      for (const value of generator()) {
        yield fn(value);
      }
    });
  }

  /** Filters elements based on the provided function */
  filter(fn: (value: T) => boolean): LazyStream<T> {
    const generator = this.generator;
    return new LazyStream(function* () {
      for (const value of generator()) {
        if (fn(value)) {
          yield value;
        }
      }
    });
  }

  /** Takes the first n elements from the stream */
  take(n: number): LazyStream<T> {
    const generator = this.generator;
    return new LazyStream(function* () {
      let count = 0;
      for (const value of generator()) {
        if (count++ < n) {
          yield value;
        } else {
          break;
        }
      }
    });
  }

  /** Converts the LazyStream to an array */
  toArray(): T[] {
    const result: T[] = [];
    for (const value of this.generator()) {
      result.push(value);
    }
    return result;
  }
}
