import {reducer, ActionType} from './reducer.js';

describe(`Reducer tests`, () => {

  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      step: -1,
      mistakes: 0
    });
  });

  it(`Reducer should increment current step by a given value`, () => {
    // Переход на 1й игровой экран
    expect(reducer({
      step: -1,
      mistakes: 0
    },
    {
      type: ActionType.INCREMENT_STEP,
      payload: 1
    })).toEqual({
      step: 0,
      mistakes: 0
    });

    // Ничего не передали - ничего не изменилось
    expect(reducer({
      step: -1,
      mistakes: 0
    },
    {
      type: ActionType.INCREMENT_STEP,
      payload: 0
    })).toEqual({
      step: -1,
      mistakes: 0
    });

    // Промежуточный игровой экран - всё ок
    expect(reducer({
      step: 1,
      mistakes: 0
    },
    {
      type: ActionType.INCREMENT_STEP,
      payload: 1
    })).toEqual({
      step: 2,
      mistakes: 0
    });
  });

  it(`Reducer should increment mistakes value by a given value`, () => {
    // Ошибка на 1м игровом экране
    expect(reducer({
      step: 1,
      mistakes: 0
    },
    {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 1
    })).toEqual({
      step: 1,
      mistakes: 1
    });

    // Передаём значение ошибки больше, чем 1
    expect(reducer({
      step: 2,
      mistakes: 0
    },
    {
      type: ActionType.INCREMENT_MISTAKES,
      payload: 2
    })).toEqual({
      step: 2,
      mistakes: 2
    });
  });

});
