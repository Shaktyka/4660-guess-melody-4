import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player/audio-player.jsx';

class GameGenreScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userAnswers: [false, false, false, false]
    };
  }

  render() {
    const {onAnswer, question} = this.props;
    const {userAnswers} = this.state;
    const {genre, answers} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form
          className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.userAnswers);
          }}
        >

          {
            answers.map((answer, i) => (
              <div className="track" key={Math.random() * 1000}>
                <AudioPlayer
                  isPlaying={i === 0}
                  src={answer.src}
                />
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${i}`}
                    id={`answer-${i}`}
                    checked={userAnswers[i]}
                    onChange={(evt) => {
                      const value = evt.target.checked;

                      this.setState({
                        userAnswers: [...userAnswers.slice(0, i), value, ...userAnswers.slice(i + 1)],
                      });
                    }}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
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
  question: PropTypes.shape({
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string,
          genre: PropTypes.string
        }).isRequired
    ).isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};

export default GameGenreScreen;
