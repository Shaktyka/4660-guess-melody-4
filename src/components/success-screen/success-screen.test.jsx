import React from 'react';
import renderer from 'react-test-renderer';

import SuccessScreen from './success-screen.jsx';

describe(`SuccessScreen rendering`, () => {

  it(`SuccessScreen renders correctly`, () => {

    const tree = renderer.create(
        <SuccessScreen
          errors={2}
          responses={6}
          onPlayMoreClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
