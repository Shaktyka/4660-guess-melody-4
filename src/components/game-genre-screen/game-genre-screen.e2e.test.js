import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameGenreScreen from './game-genre-screen.jsx';

configure({
  adapter: new Adapter()
});

const MOCK_QUESTION = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `path-1`,
      genre: `rock`,
    },
    {
      src: `path-2`,
      genre: `jazz`,
    },
    {
      src: `path-3`,
      genre: `jazz`,
    },
    {
      src: `path-4`,
      genre: `blues`,
    }
  ]
};

describe(`GameGenreScreen works correctly`, () => {

  it(`When user answers genre question form is not sent`, () => {
    const onAnswer = jest.fn();

    const genreQuestion = shallow(
        <GameGenreScreen
          onAnswer={onAnswer}
          question={MOCK_QUESTION}
        />
    );

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();

    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const onAnswer = jest.fn((...args) => [...args]);
    const userAnswer = [false, true, false, false];

    const genreQuestion = shallow(
        <GameGenreScreen
          onAnswer={onAnswer}
          question={MOCK_QUESTION}
        />
    );

    const form = genreQuestion.find(`form`);
    const inputTwo = genreQuestion.find(`input`).at(1);

    inputTwo.simulate(`change`, {target: {checked: true}});
    form.simulate(`submit`, {preventDefault() {}});

    expect(onAnswer).toHaveBeenCalledTimes(1);

    expect(onAnswer.mock.calls[0][0]).toMatchObject(MOCK_QUESTION);
    expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);

    expect(
        genreQuestion.find(`input`).map((it) => it.prop(`checked`))
    ).toEqual(userAnswer);
  });

});
