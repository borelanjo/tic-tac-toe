import { expect } from 'chai';
import { Game } from './game.model';
import { Board } from './board.model';

describe('Game Model', () => {
    const game = new Game('X', new Board(), null);
  it('Game should start with X', () => {
    expect(game.turn).to.equal('X');
  });

  it('Game Board should has Line A with 3 columns', () => {
    expect(game.board.a.columns.length).to.be.equal(3);
  });

  it('Game Board should has Line B with 3 columns', () => {
    expect(game.board.b.columns.length).to.be.equal(3);
  });

  it('Game Board should has Line C with 3 columns', () => {
    expect(game.board.c.columns.length).to.be.equal(3);
  });

  it('Game Board should start without a winner', () => {
    expect(game.winner).to.be.null;
  });
});