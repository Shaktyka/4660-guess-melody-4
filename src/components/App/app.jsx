import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameArtist from '../game-artist/game-artist.jsx';
import GameGenre from '../game-genre/game-genre.jsx';

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
          <GameArtist />
        </Route>
        <Route exact path="/dev-genre">
          <GameGenre />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired
};

export default App;
