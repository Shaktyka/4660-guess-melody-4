import React from 'react';
import PropTypes from 'prop-types';

const SuccessScreen = (props) => {
  const {errors, responses, onPlayMoreClick} = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Вы настоящий меломан!</h2>
      <p className="result__total">Вы ответили правильно на {responses} вопросов и совершили {errors} ошибки</p>
      <button
        className="replay"
        type="button"
        onClick={() => onPlayMoreClick()}
      >
        Сыграть ещё раз
      </button>
    </section>
  );
};

SuccessScreen.propTypes = {
  errors: PropTypes.number.isRequired,
  responses: PropTypes.number.isRequired,
  onPlayMoreClick: PropTypes.func.isRequired
};

export default SuccessScreen;
