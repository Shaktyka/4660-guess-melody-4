import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GameScreen from '../game-screen/game-screen.jsx';
import GameArtistScreen from '../game-artist-screen/game-artist-screen.jsx';
import GameGenreScreen from '../game-genre-screen/game-genre-screen.jsx';
import SuccessScreen from '../success-screen/success-screen.jsx';
import FailureScreen from '../failure-screen/failure-screen.jsx';

import withActivePlayer from '../../hocs/with-active-player/with-active-player.js';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer.js';

import GameType from "../../const.js";

const GameArtistScreenWrapped = withActivePlayer(GameArtistScreen);
const GameGenreScreenWrapped = withActivePlayer(withUserAnswer(GameGenreScreen));

class App extends PureComponent {

  _renderGameScreen() {
    const {
      maxMistakes,
      mistakes,
      questions,
      onUserAnswer,
      onWelcomeButtonClick,
      step,
      resetGame
    } = this.props;

    const question = questions[step];

    if (step === -1) {
      return (
        <WelcomeScreen
          errors={maxMistakes}
          onWelcomeButtonClick={onWelcomeButtonClick}
        />
      );
    }

    if (mistakes >= maxMistakes) {
      return (
        <FailureScreen
          onReplayBtnClick={resetGame}
        />
      );
    }

    if (step >= questions.length) {
      return (
        <SuccessScreen
          questionsCount={questions.length}
          mistakesCount={mistakes}
          onReplayButtonClick={resetGame}
        />
      );
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameScreen
              type={question.type}
            >
              <GameArtistScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
        case GameType.GENRE:
          return (
            <GameScreen
              type={question.type}
            >
              <GameGenreScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
              />
            </GameScreen>
          );
      }
    }

    return null;
  }

  render() {
    const {questions} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderGameScreen()}
          </Route>
          <Route exact path="/artist">
            <GameArtistScreenWrapped
              question={questions[1]}
              onAnswer={() => {}}
            />
          </Route>
          <Route exact path="/genre">
            <GameGenreScreenWrapped
              question={questions[0]}
              onAnswer={() => {}}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  resetGame: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        answers: PropTypes.arrayOf(PropTypes.object).isRequired
      })
  ).isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired
};

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
  mistakes: state.mistakes
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistakes(question, answer));
    dispatch(ActionCreator.incrementStep());
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
