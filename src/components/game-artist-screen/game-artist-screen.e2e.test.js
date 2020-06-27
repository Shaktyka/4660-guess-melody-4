import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameArtistScreen from './game-artist-screen.jsx';

configure({
  adapter: new Adapter()
});

const MOCK_QUESTION = {
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

const mockEvent = {
  preventDefault() {}
};

describe(`GameArtistScreen works correctly`, () => {

  it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
    const onAnswer = jest.fn();
    const userAnswer = {
      artist: `Kevin MacLeod`,
      picture: `https://api.adorable.io/avatars/128/98`,
    };

    const screen = shallow(<GameArtistScreen
      onAnswer={onAnswer}
      question={MOCK_QUESTION}
      renderPlayer={() => {}}
    />);

    const answerInputs = screen.find(`input`);
    const answerOne = answerInputs.at(0);

    answerOne.simulate(`change`, mockEvent);

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(MOCK_QUESTION);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
  });

});
