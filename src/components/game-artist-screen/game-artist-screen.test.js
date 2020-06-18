import React from 'react';
import renderer from 'react-test-renderer';
import GameArtistScreen from './game-artist-screen.jsx';

const TEST_QUESTION = {
  type: `artist`,
  song: {
    artist: `Audionautix`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
  },
  answers: [
    {
      picture: `https://api.adorable.io/avatars/128/98`,
      artist: `Kevin MacLeod`,
    },
    {
      picture: `https://api.adorable.io/avatars/128/99`,
      artist: `Jingle Punks`,
    },
    {
      picture: `https://api.adorable.io/avatars/128/100`,
      artist: `Lordi`,
    }
  ]
};

const onAnswer = () => {};

describe(`GameGenreScreen rendering`, () => {

  it(`GameArtistScreen renders correctly`, () => {
    const tree = renderer.create(
        <GameArtistScreen
          question={TEST_QUESTION}
          onAnswer={onAnswer}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
