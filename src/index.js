import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer.js';

import App from './components/app/app.jsx';
import questions from "./mocks/questions.js";

const GameSettings = {
  ERRORS_AMOUNT: 3
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        errorsAmount={GameSettings.ERRORS_AMOUNT}
        questions={questions}
      />
    </Provider>,
    document.querySelector(`#root`)
);
