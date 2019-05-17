import React from "react";
import ReactDOM from "react-dom";

import App from "./components/app/app.jsx";
import questions, {gameSettings} from "./mocks/questions.js";

const init = (gameQuestions) => {
  const {
    gameTime,
    errorCount,
  } = gameSettings;

  ReactDOM.render(
      <App
        errorCount={errorCount}
        gameTime={gameTime}
        questions={gameQuestions}
        onStartButtonClick = {null}
      />,
      document.querySelector(`.main`)
  );
};

init(questions);
