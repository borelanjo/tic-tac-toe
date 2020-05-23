import { expect } from 'chai';
import { Board } from './board.model';

describe('Board Model', () => {
  const board = new Board();

  it('Game Board should has Line A with 3 columns', () => {
    expect(board.a.columns.length).to.be.equal(3);
  });

  it('Game Board should has Line B with 3 columns', () => {
    expect(board.b.columns.length).to.be.equal(3);
  });

  it('Game Board should has Line C with 3 columns', () => {
    expect(board.c.columns.length).to.be.equal(3);
  });

});