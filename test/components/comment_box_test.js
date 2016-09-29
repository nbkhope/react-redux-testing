import { renderComponent, expect } from '../test_helper';

import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  // declare variable that will change over time
  let component;

  // runs before each test (it)
  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has a text area', () => {
    // the above returns a jquery component, so allows you to
    // use jquery methods
    expect(component.find('textarea')).to.exist; // don't use () here
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  it('has the correct class', () => {
    expect(component).to.have.class('comment-box');
  });
});
