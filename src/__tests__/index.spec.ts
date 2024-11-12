import { add, DEFAULT_VALUE, Calculator } from "../index";

describe("GenericLibrary Module", () => {
  describe("add function", () => {
    it("should add two numbers correctly", () => {
      expect(add(5, 10)).toBe(15);
      expect(add(-3, 3)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe("DEFAULT_VALUE constant", () => {
    it("should be equal to 42", () => {
      expect(DEFAULT_VALUE).toBe(42);
    });
  });

  describe("Calculator class", () => {
    let calculator: Calculator;

    beforeEach(() => {
      calculator = new Calculator();
    });

    it("should initialize with the specified initial value or 0 by default", () => {
      const calcWithDefault = new Calculator();
      expect(calcWithDefault.getValue()).toBe(0);

      const calcWithInitialValue = new Calculator(10);
      expect(calcWithInitialValue.getValue()).toBe(10);
    });

    it("should add a number to the current value", () => {
      calculator.add(10);
      expect(calculator.getValue()).toBe(10);

      calculator.add(5);
      expect(calculator.getValue()).toBe(15);
    });

    it("should subtract a number from the current value", () => {
      calculator.add(10);
      calculator.subtract(5);
      expect(calculator.getValue()).toBe(5);

      calculator.subtract(2);
      expect(calculator.getValue()).toBe(3);
    });

    it("should multiply the current value by a number", () => {
      calculator.add(5);
      calculator.multiply(3);
      expect(calculator.getValue()).toBe(15);
    });

    it("should divide the current value by a number", () => {
      calculator.add(10);
      calculator.divide(2);
      expect(calculator.getValue()).toBe(5);
    });

    it("should throw an error when dividing by zero", () => {
      calculator.add(10);
      expect(() => calculator.divide(0)).toThrow("Cannot divide by zero");
    });

    it("should reset the calculator to a specified value or 0 by default", () => {
      calculator.add(10);
      calculator.reset();
      expect(calculator.getValue()).toBe(0);

      calculator.add(5);
      calculator.reset(20);
      expect(calculator.getValue()).toBe(20);
    });

    it("should retrieve the current value with getValue()", () => {
      calculator.add(7);
      expect(calculator.getValue()).toBe(7);
    });
  });
});
