import { ILazyStream } from "../ILazyStream";
import { LazyStream } from "../LazyStream";

describe("LazyStream", () => {
  it("should create a LazyStream from an array and convert to an array", () => {
    const lazyStream = LazyStream.from([1, 2, 3]);
    expect(lazyStream.toArray()).toEqual([1, 2, 3]);
  });

  it("should map values correctly", () => {
    const lazyStream = LazyStream.from([1, 2, 3]).map((x) => x * 2);
    expect(lazyStream.toArray()).toEqual([2, 4, 6]);
  });

  it("should filter values correctly", () => {
    const lazyStream = LazyStream.from([1, 2, 3, 4]).filter((x) => x % 2 === 0);
    expect(lazyStream.toArray()).toEqual([2, 4]);
  });

  it("should take the first n values", () => {
    const lazyStream = LazyStream.from([1, 2, 3, 4, 5]).take(3);
    expect(lazyStream.toArray()).toEqual([1, 2, 3]);
  });

  it("should handle empty streams gracefully", () => {
    const lazyStream = LazyStream.from([])
      .map((x) => x * 2)
      .filter((x) => x > 0)
      .take(2);
    expect(lazyStream.toArray()).toEqual([]);
  });
});
