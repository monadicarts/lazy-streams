/**
 * @module GenericLibrary
 * This is a generic TypeScript library that provides basic functionality as a sample npm module.
 */

/** A constant value example */
export const DEFAULT_VALUE = 42;

/**
 * Adds two numbers.
 *
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of `a` and `b`
 * @example
 * ```typescript
 * import { add } from "generic-library";
 * const result = add(5, 10); // result is 15
 * ```
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * A simple calculator class that performs basic arithmetic operations.
 */
export class Calculator {
  private value: number;

  /**
   * Creates a calculator instance.
   *
   * @param initialValue - The initial value to start with (default is 0)
   */
  constructor(initialValue: number = 0) {
    this.value = initialValue;
  }

  /**
   * Adds a number to the current value.
   *
   * @param num - The number to add
   * @returns The new value after addition
   */
  add(num: number): number {
    this.value += num;
    return this.value;
  }

  /**
   * Subtracts a number from the current value.
   *
   * @param num - The number to subtract
   * @returns The new value after subtraction
   */
  subtract(num: number): number {
    this.value -= num;
    return this.value;
  }

  /**
   * Multiplies the current value by a given number.
   *
   * @param num - The number to multiply with
   * @returns The new value after multiplication
   */
  multiply(num: number): number {
    this.value *= num;
    return this.value;
  }

  /**
   * Divides the current value by a given number.
   *
   * @param num - The number to divide by
   * @returns The new value after division
   * @throws Error if attempting to divide by zero
   */
  divide(num: number): number {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.value /= num;
    return this.value;
  }

  /**
   * Resets the calculator to a specific value.
   *
   * @param value - The value to reset to (default is 0)
   */
  reset(value: number = 0): void {
    this.value = value;
  }

  /**
   * Gets the current value.
   *
   * @returns The current value
   */
  getValue(): number {
    return this.value;
  }
}
