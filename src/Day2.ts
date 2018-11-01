import { Day } from "./Day";

export class Day2 extends Day {
  public input: any;
  public getAnswer1(): any {
    const rows = this.input.split("\n");
    return rows.reduce(this.calculateWrap, 0);
  }

  public getAnswer2(): any {
    const rows = this.input.split("\n");
    return rows.reduce(this.calculateRibbon, 0);
  }

  private calculateWrap(total: number, row: any) {
    let [l, w, h] = row.split("x").sort(sortNumbers);
    let wrap = 3*l*w + 2*w*h + 2*h*l;

    return total + wrap;
  }

  private calculateRibbon(total: number, row: any) {
    let [l, w, h] = row.split("x").sort(sortNumbers);
    let ribbon = 2*l + 2*w + l*w*h;

    return total + ribbon;
  }

  
}

function sortNumbers(a: number, b: number): number {
  return a - b;
}
