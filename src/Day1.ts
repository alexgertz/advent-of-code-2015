import { Day } from "./Day";

export class Day1 extends Day {
  public input: any;
  public getAnswer1(): any {
    return this.input.split("").reduce(this.step, 0);
  }

  public getAnswer2(): any {
    let floor = 0;
    let position = 1;

    this.input.split("").forEach((char: string, index: number) => {
      floor = this.step(floor, char);
      if (floor === -1 && position === 1) {
        position = index + 1;
      }
    });

    return position;
  }

  private step(current: number, char: string): number {
    if (char === ")") { return current - 1; }
    return current + 1;
  }
}
