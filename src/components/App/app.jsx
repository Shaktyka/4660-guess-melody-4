import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {errorsAmount} = props;

  return (
    <WelcomeScreen errors={errorsAmount} />
  );
};

export default App;
