import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import GenreQuestionItem from '../genre-question-item/genre-question-item.jsx';

class GameGenreScreen extends PureComponent {
  render() {
    const {
      onAnswer,
      onChange,
      question,
      renderPlayer,
      userAnswers
    } = this.props;
    const {genre, answers} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer();
          }}
        >

          {
            answers.map((answer, i) => (
              <GenreQuestionItem
                answer={answer}
                id={i}
                key={`${i}-${answer.src}`}
                onChange={onChange}
                renderPlayer={renderPlayer}
                userAnswer={userAnswers[i]}
              />
            ))
          }

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }
}

GameGenreScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  question: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string,
          genre: PropTypes.string
        }).isRequired
    ).isRequired,
    type: PropTypes.string.isRequired
  }).isRequired,
  renderPlayer: PropTypes.func.isRequired,
  userAnswers: PropTypes.arrayOf(PropTypes.bool).isRequired
};

export default GameGenreScreen;
