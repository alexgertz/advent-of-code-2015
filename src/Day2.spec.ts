import { Day2 } from "./Day2";

describe("Day2 ", () => {

  test("wraps 2x3x4 to 58 square feet", () => {
    expect(new Day2("2x3x4").getAnswer1()).toBe(58);
  });

  test("wraps 1x1x10 to 43 square feet", () => {
    expect(new Day2("1x1x10").getAnswer1()).toBe(43);
  });

  test("wraps 1x1x10 2x3x4 to 101 square feet", () => {
    expect(new Day2("1x1x10 \n 2x3x4").getAnswer1()).toBe(101);
  });

  test("ribbon for 1x1x10 is 14 feet", () => {
    expect(new Day2("1x1x10").getAnswer2()).toBe(14);
  });

  test("ribbon for 2x3x4  is 34 feet", () => {
    expect(new Day2("2x3x4 ").getAnswer2()).toBe(34);
  });

});
