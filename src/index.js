import React from "react";
import ReactDOM from "react-dom";

import {App} from "./components/app/app.jsx";

const init = () => {
  const settings = {
    gameTime: 4,
    errorCount: 7,
  };

  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
      />,
      document.querySelector(`.main`)
  );
};

init();
