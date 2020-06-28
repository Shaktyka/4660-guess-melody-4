import {reducer, ActionType, ActionCreator} from './reducer.js';

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

describe(`Reducer tests`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      step: -1,
      mistakes: 0,
      maxMistakes: 3,
      questions: QUESTIONS_DATA
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
      questions: QUESTIONS_DATA
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    })).toEqual({
      step: 0,
      mistakes: 0,
      questions: QUESTIONS_DATA
    });

    expect(reducer({
      step: -1,
      mistakes: 0,
      questions: QUESTIONS_DATA
    }, {
      type: ActionType.INCREMENT_STEP,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakes: 0,
      questions: QUESTIONS_DATA
    });
  });

  it(`Reducer should increment mistakes value by a given value`, () => {
    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    })).toEqual({
      step: -1,
      mistakes: 1,
    });

    expect(reducer({
      step: -1,
      mistakes: 0,
    }, {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    })).toEqual({
      step: -1,
      mistakes: 0,
    });
  });

});

describe(`Action creators work correctly`, () => {
  it(`Action creator for incrementing step returns correct action`, () => {
    expect(ActionCreator.incrementStep()).toEqual({
      type: ActionType.INCREMENT_STEP,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for artist is correct`, () => {
    expect(ActionCreator.incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `correct`,
      picture: ``,
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for artist is incorrect`, () => {
    expect(ActionCreator.incrementMistake({
      type: `artist`,
      song: {
        artist: `correct`,
        src: ``,
      },
      answers: [
        {
          artist: `correct`,
          picture: ``,
        }, {
          artist: `incorrect`,
          picture: ``,
        }, {
          artist: `incorrect-2`,
          picture: ``,
        },
      ]
    }, {
      artist: `incorrect`,
      picture: ``,
    })).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });

  it(`Action creator for incrementing mistake returns action with 0 payload if answer for genre is correct`, () => {
    expect(ActionCreator.incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `rock`,
          src: ``,
        }, {
          genre: `jazz`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [false, true, false, false])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 0,
    });
  });

  it(`Action creator for incrementing mistake returns action with 1 payload if answer for genre is incorrect`, () => {
    expect(ActionCreator.incrementMistake({
      type: `genre`,
      genre: `jazz`,
      answers: [
        {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        }, {
          genre: `blues`,
          src: ``,
        },
      ]
    }, [true, true, true, true])).toEqual({
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1,
    });
  });
});
