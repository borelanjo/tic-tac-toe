import { expect } from 'chai';
import { Line } from './line.model';

describe('Line Model', () => {
    const line = new Line();

  it('Line should has 3 columns', () => {
    expect(line.columns.length).to.equal(3);
  });

});