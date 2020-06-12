import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const ERRORS_AMOUNT = 4;

describe(`App rendering`, () => {

  it(`App renders correctly`, () => {
    const tree = renderer
      .create(<App errorsAmount={ERRORS_AMOUNT} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
