import { Board } from "./board.model";

export class Game {
    constructor(
        public turn: string,
        public board: Board,
        public winner: string | null 
      ) { }
}