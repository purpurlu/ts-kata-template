import countSpace from "./kata-count-space";

test("Counts number of space characters", () => {
  expect(countSpace("Hello world")).toBe(1);
  expect(countSpace("  ")).toBe(2);
  expect(countSpace("")).toBe(0);
  expect(countSpace('2 4 6 7')).toBe(3);
  expect(countSpace('[2, 5, 6, 8]')).toBe(3);
  
});