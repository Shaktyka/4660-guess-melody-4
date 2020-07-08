import React from 'react';
import renderer from 'react-test-renderer';

import SuccessScreen from './success-screen.jsx';

describe(`With 3 questions`, () => {

  it(`With 0 mistake`, () => {
    const tree = renderer
      .create(<SuccessScreen
        questionsCount={3}
        mistakesCount={0}
        onReplayBtnClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With 1 mistake`, () => {
    const tree = renderer
      .create(<SuccessScreen
        questionsCount={3}
        mistakesCount={1}
        onReplayBtnClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

describe(`With 2 questions`, () => {

  it(`With 0 mistake`, () => {
    const tree = renderer
      .create(<SuccessScreen
        questionsCount={2}
        mistakesCount={0}
        onReplayBtnClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`With 1 mistake`, () => {
    const tree = renderer
      .create(<SuccessScreen
        questionsCount={2}
        mistakesCount={1}
        onReplayBtnClick={() => {}}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
