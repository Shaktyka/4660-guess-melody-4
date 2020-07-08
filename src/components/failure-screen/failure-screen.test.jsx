import React from 'react';
import renderer from 'react-test-renderer';

import FailureScreen from './failure-screen.jsx';

describe(`FailureScreen rendering`, () => {

  it(`FailureScreen renders correctly`, () => {
    const tree = renderer.create(
        <FailureScreen
          onReplayBtnClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
