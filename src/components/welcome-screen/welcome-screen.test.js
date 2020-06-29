import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen.jsx';

const ERRORS_AMOUNT = 4;
const onWelcomeButtonClick = () => {};

describe(`WelcomeScreen rendering`, () => {

  it(`WelcomeScreen renders correctly`, () => {
    const tree = renderer
      .create()
      .toJSON(
          <WelcomeScreen
            errors={ERRORS_AMOUNT}
            onWelcomeButtonClick={onWelcomeButtonClick}
          />
      );

    expect(tree).toMatchSnapshot();
  });

});
