import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app.jsx";

const init = () => {
  const settings = {
    gameTime: 4,
    errorCount: 7,
    onStartButtonClick: () => {}
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
        onStartButtonClick = {settings.onStartButtonClick}
      />,
      document.querySelector(`.main`)
  );
};

init();
