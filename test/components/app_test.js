// Import helpers from test helper
import { renderComponent, expect } from '../test_helper';

// Component you want to test
import App from '../../src/components/app';

// describe: to group similar tests
describe('App', () => {

  // it: to test a single attribute of a target (one single test)
  it('shows the correct text', () => {
    // create an instance of App
    const component = renderComponent(App);

    // expect: to make an assertion about a target
    // ('target': the thing you're testing)
    expect(component).to.contain('Testing a React-Redux App');
  });

});
