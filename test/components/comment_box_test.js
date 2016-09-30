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

  describe('entering some text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'this is a new comment');
    });

    it('shows the text in the textarea', () => {
      expect(component.find('textarea')).to.have.value('this is a new comment');
    });

    it('clears the textarea input when comment is submitted', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  })
});
