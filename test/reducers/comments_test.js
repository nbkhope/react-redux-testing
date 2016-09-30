import { expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    //expect(commentReducer()).to.be.instanceof(Array);
    // checks to see if element in one array equals elements in other array
    // (different from equals)
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'hello there' };
    expect(commentReducer([], action)).to.eql(['hello there']);
  });
});
