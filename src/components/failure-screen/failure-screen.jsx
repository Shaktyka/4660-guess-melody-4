import React from 'react';
import PropTypes from 'prop-types';

const FailureScreen = (props) => {
  const {onReplayBtnClick} = props;

  return (
    <section className="result">
      <div className="result__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="result__title">Какая жалость!</h2>
      <p className="result__total result__total--fail">
        У вас закончились все попытки. Ничего, повезёт в следующий раз!
      </p>
      <button
        className="replay"
        type="button"
        onClick={onReplayBtnClick}
      >
        Попробовать ещё раз
      </button>
    </section>
  );
};

FailureScreen.propTypes = {
  onReplayBtnClick: PropTypes.func.isRequired
};

export default FailureScreen;
