import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {errorsAmount} = props;

  return (
    <WelcomeScreen errors={errorsAmount} />
  );
};

export default App;
