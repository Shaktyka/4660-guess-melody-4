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

describe(`GameGenreScreen rendering`, () => {

  it(`GameGenreScreen renders correctly without answers`, () => {
    const tree = renderer.create((
      <GameGenreScreen
        question={TEST_QUESTION}
        onAnswer={() => {}}
        onChange={() => {}}
        renderPlayer={() => {}}
        userAnswers={[false, false, false, false]}
      />),
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`GameGenreScreen renders correctly with 2 answers`, () => {
    const tree = renderer.create((
      <GameGenreScreen
        question={TEST_QUESTION}
        onAnswer={() => {}}
        onChange={() => {}}
        renderPlayer={() => {}}
        userAnswers={[false, true, true, false]}
      />),
    {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
