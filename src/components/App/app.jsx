import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameArtistScreen from '../game-artist-screen/game-artist-screen.jsx';
import GameGenreScreen from '../game-genre-screen/game-genre-screen.jsx';

const welcomeButtonClickHandler = () => {};

const onAnswer = (question, answers) => {
  return {question, answers};
};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
    };
  }

  _renderGameScreen() {
    const {errorsAmount, questions} = this.props;
    const {step} = this.state;
    // const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen
          errors={errorsAmount}
          welcomeButtonClickHandler={() => {
            this.setState({
              step: 0,
            });
          }}
        />
      );
    }
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
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
  }
}

App.propTypes = {
  errorsAmount: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.object.isRequired
  ).isRequired
};

export default App;
