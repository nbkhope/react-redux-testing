// Import helpers from test helper
import { renderComponent, expect } from '../test_helper';

// Component you want to test
import App from '../../src/components/app';

// describe: to group similar tests
describe('App', () => {
  let component;

  beforeEach(() => {
    // create an instance of App
    component = renderComponent(App);
  })

  // it: to test a single attribute of a target (one single test)
  it('shows the correct text', () => {
    // expect: to make an assertion about a target
    // ('target': the thing you're testing)
    expect(component).to.contain('Testing a React-Redux App');
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a comment list', () => {
    expect(component.find('.comment-list')).to.exist;
  });

});
