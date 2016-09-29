import { renderComponent, expect } from '../test_helper';

import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  it('has a text area', () => {
    const component = renderComponent(CommentBox);
    // the above returns a jquery component, so allows you to
    // use jquery methods
    expect(component.find('textarea')).to.exist; // don't use () here
  });
  it('has a button', () => {
    const component = renderComponent(CommentBox);
    expect(component.find('button')).to.exist;
  });
  it('', () => {

  });
});
