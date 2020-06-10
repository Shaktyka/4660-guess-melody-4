import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';

const settings = {
  errorsAmount: 3
};

ReactDOM.render(
    <App errorsAmount={settings.errorsAmount} />,
    document.querySelector(`#root`)
);
