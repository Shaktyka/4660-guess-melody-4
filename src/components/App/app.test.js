import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

const ERRORS_AMOUNT = 4;

const QUESTIONS_DATA = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Audionautix`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `https://api.adorable.io/avatars/128/90`,
        artist: `Test 1`,
      },
      {
        picture: `https://api.adorable.io/avatars/128/91`,
        artist: `Test 2`,
      },
      {
        picture: `https://api.adorable.io/avatars/128/92`,
        artist: `Test 3`,
      }
    ]
  }
];
describe(`App rendering`, () => {

  it(`App renders correctly`, () => {
    const tree = renderer
      .create(
          <App
            errorsAmount={ERRORS_AMOUNT}
            questions={QUESTIONS_DATA}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            step={-1}
          />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`App renders GameGenreScreen`, () => {
    const tree = renderer
      .create(
          <App
            errorsAmount={ERRORS_AMOUNT}
            questions={QUESTIONS_DATA}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            step={0}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`App renders GameArtistScreen`, () => {
    const tree = renderer
      .create(
          <App
            errorsAmount={ERRORS_AMOUNT}
            questions={QUESTIONS_DATA}
            onUserAnswer={() => {}}
            onWelcomeButtonClick={() => {}}
            step={1}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
