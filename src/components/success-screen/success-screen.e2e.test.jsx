import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SuccessScreen from './success-screen.jsx';

configure({
  adapter: new Adapter()
});

describe(`SuccessScreen works correctly`, () => {

  it(`Click on Replay button works correctly`, () => {
    const onClick = jest.fn();

    const screen = shallow(
        <SuccessScreen
          errors={2}
          responses={6}
          onPlayMoreClick={onClick}
        />
    );

    const replayButton = screen.find(`.replay`);

    replayButton.simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

});
