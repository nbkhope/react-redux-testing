import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions'; // don't need to add /index because it's index

// Tests for action creators
describe('actions', () => {
  describe('saveComment', () => {
    it('has the correct type', () => {
      const action = saveComment();
      expect(action.type).to.equal(SAVE_COMMENT);
    });

    it('has the correct payload', () => {
      const action = saveComment('hello there');
      expect(action.payload).to.equal('hello there');
    })
  })
});
