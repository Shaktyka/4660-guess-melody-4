import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {errorsAmount} = props;

  return (
    <WelcomeScreen errors={errorsAmount} />
  );
};

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired
};

export default App;
