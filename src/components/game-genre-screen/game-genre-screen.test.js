import React from 'react';
import renderer from 'react-test-renderer';
import GameGenreScreen from './game-genre-screen.jsx';

const TEST_QUESTION = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `https://file-1.ogg`,
      genre: `rock`,
    },
    {
      src: `https://file-2.ogg`,
      genre: `blues`,
    },
    {
      src: `https://file-3.ogg`,
      genre: `jazz`,
    },
    {
      src: `https://file-4.ogg`,
      genre: `rock`,
    }
  ]
};

const onAnswer = () => {};

describe(`GameGenreScreen rendering`, () => {

  it(`GameGenreScreen renders correctly`, () => {
    const tree = renderer
      .create(<GameGenreScreen
        question={TEST_QUESTION}
        onAnswer={onAnswer}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
