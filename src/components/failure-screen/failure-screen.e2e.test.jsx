import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FailureScreen from './failure-screen.jsx';

configure({
  adapter: new Adapter()
});

describe(`FailureScreen works correctly`, () => {

  it(`Click on Replay button works correctly`, () => {
    const onClick = jest.fn();

    const screen = shallow(
        <FailureScreen
          onTryAgainClick={onClick}
        />
    );

    const replayButton = screen.find(`.replay`);

    replayButton.simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

});
