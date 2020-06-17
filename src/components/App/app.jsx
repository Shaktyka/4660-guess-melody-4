import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameArtistScreen from '../game-artist-screen/game-artist-screen.jsx';
import GameGenreScreen from '../game-genre-screen/game-genre-screen.jsx';

const welcomeButtonClickHandler = () => {};

const onAnswer = (question, answers) => {
  // console.log(question, answers);
};

const App = (props) => {
  const {errorsAmount, questions} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen
            errors={errorsAmount}
            welcomeButtonClickHandler={welcomeButtonClickHandler}
          />
        </Route>
        <Route exact path="/dev-artist">
          <GameArtistScreen question={questions[1]} onAnswer={onAnswer} />
        </Route>
        <Route exact path="/dev-genre">
          <GameGenreScreen question={questions[0]} onAnswer={onAnswer} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.object.isRequired
  ).isRequired
};

export default App;
