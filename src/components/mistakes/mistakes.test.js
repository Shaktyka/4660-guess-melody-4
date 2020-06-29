import React from 'react';
import renderer from 'react-test-renderer';

import Mistakes from './mistakes.jsx';

describe(`Mistakes renders correctly`, () => {

  it(`Mistakes with 0 mistakes`, () => {
    const mistakes = 0;

    const tree = renderer.create(
        <Mistakes count={mistakes} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Mistakes with 2 mistakes`, () => {
    const mistakes = 2;

    const tree = renderer.create(
        <Mistakes count={mistakes} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
