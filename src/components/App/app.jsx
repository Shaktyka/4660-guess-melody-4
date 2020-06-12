import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const welcomeButtonClickHandler = () => {};

const App = (props) => {
  const {errorsAmount} = props;

  return (
    <WelcomeScreen
      errors={errorsAmount}
      welcomeButtonClickHandler={welcomeButtonClickHandler}
    />
  );
};

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired
};

export default App;
