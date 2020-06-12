import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

const ERRORS_AMOUNT = 4;

Enzyme.configure({
  adapter: new Adapter()
});

describe(`Welcome button click test`, () => {

  it(`Welcome button should be clicked`, () => {
    const welcomeButtonClickHandler = jest.fn();

    const welcomeScreen = shallow(
        <WelcomeScreen
          errors={ERRORS_AMOUNT}
          welcomeButtonClickHandler={welcomeButtonClickHandler}
        />
    );

    const welcomeButton = welcomeScreen.find(`.welcome__button`);

    welcomeButton.props().onClick();

    expect(welcomeButtonClickHandler.mock.calls.length).toBe(1);
  });

});
