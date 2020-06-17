import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameArtistScreen from '../game-artist-screen/game-artist-screen.jsx';
import GameGenreScreen from '../game-genre-screen/game-genre-screen.jsx';

const welcomeButtonClickHandler = () => {};

const App = (props) => {
  const {errorsAmount} = props;

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
          <GameArtistScreen />
        </Route>
        <Route exact path="/dev-genre">
          <GameGenreScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired
};

export default App;
