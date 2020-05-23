import { Line } from "./line.model";

export class Board {
    constructor(
        public a: Line = new Line(),
        public b: Line = new Line(),
        public c: Line = new Line()
      ) { }
}