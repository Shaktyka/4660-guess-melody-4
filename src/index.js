import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from "./mocks/questions.js";

const GameSettings = {
  ERRORS_AMOUNT: 3
};

ReactDOM.render(
    <App
      errorsAmount={GameSettings.ERRORS_AMOUNT}
      questions={questions}
    />,
    document.querySelector(`#root`)
);
