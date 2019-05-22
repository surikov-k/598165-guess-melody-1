
import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player/audio-player.jsx';

class GenreQuestionScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: null,
    };
  }

  render() {
    const {question} = this.props;
    const {
      answers,
      genre
    } = question;

    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img
            className="game__logo"
            src="img/melody-logo-ginger.png"
            alt="Угадай мелодию"
          />
        </a>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="timer"
          viewBox="0 0 780 780"
        >
          <circle
            className="timer__line"
            cx="390"
            cy="390"
            r="370"
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          <div className="wrong"></div>
          <div className="wrong"></div>
          <div className="wrong"></div>
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks" onSubmit={this._handlerSubmitForm.bind(this)}>
          {answers.map((it) => <div className="game__track" key={it.id}>
            <AudioPlayer
              src={it.src}
              isPlaying={it.id === this.state.activePlayer}
              onPlayButtonClick={this._handlerPlayButtonClick.bind(this, it.id)}
            />
            <div className="game__answer">
              <input
                className="game__input visually-hidden"
                type="checkbox"
                name="answer"
                value={`answer-${it.id}`}
                id={`answer-${it.id}`}
              />
              <label className="game__check" htmlFor={`answer-${it.id}`}>Отметить</label>
            </div>
          </div>)}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }

  _handlerSubmitForm(evt) {
    evt.preventDefault();
    this.props.onAnswer();
  }

  _handlerPlayButtonClick(answerId) {
    this.setState({
      activePlayer: this.state.activePlayer === answerId ? null : answerId
    });
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired
};

export default GenreQuestionScreen;
