import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import questions from "./mocks/questions.js";

console.log(questions);

const settings = {
  errorsAmount: 3
};

ReactDOM.render(
    <App errorsAmount={settings.errorsAmount} />,
    document.querySelector(`#root`)
);
