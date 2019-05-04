import React from "react";
import PropTypes from "prop-types";

import {WelcomeScreen} from "../welcome-screen/welcome-screen.jsx";

export const App = (props) => {
  App.propTypes = {
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired
  };
  const {gameTime, errorCount} = props;

  return <WelcomeScreen
    time = {gameTime}
    errorCount = {errorCount}
  />;
};
