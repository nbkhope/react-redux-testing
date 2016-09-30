import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = {
      comments: [
        'Hello there!',
        'This is amazing.',
        "Okay, lets go!"
      ]
    };
    // third argument is the props injected into component
    component = renderComponent(CommentList, null, props);
  });

  it('shows an \'li\' for each comment', () => {
    expect(component.find('li').length).to.equal(3);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('Hello there!');
    expect(component).to.contain('This is amazing.');
    expect(component).to.contain("Okay, lets go!");
  });

});
