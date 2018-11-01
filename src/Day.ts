import DayInterface from "./DayInterface";

export class Day implements DayInterface {
  public input: any;

  constructor(input: any) {
    this.input = input;
  }

  public getAnswer1() {
    return "";
  }

  public getAnswer2() {
    return "";
  }
}
