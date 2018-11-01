import { Day1 } from "./Day1";

describe("Day1 ", () => {

  test("calculates (()) and ()() to 0 floors", () => {
    expect(new Day1("(())").getAnswer1()).toBe(0);
    expect(new Day1("()()").getAnswer1()).toBe(0);
  });

  test("calculates ))) and )())()) to -3 floors", () => {
    expect(new Day1(")))").getAnswer1()).toBe(-3);
    expect(new Day1(")())())").getAnswer1()).toBe(-3);
  });

  test("calculates ))((((( to 3 floors", () => {
    expect(new Day1("))(((((").getAnswer1()).toBe(3);
  });

});
