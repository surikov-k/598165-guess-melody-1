import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Start button clicks`, () => {
  const clickHandler = jest.fn();
  const screen = shallow(<WelcomeScreen
    gameTime = {0}
    errorCount = {0}
    onStartButtonClick = {clickHandler}
  />);

  console.log(screen.debug()); // eslint-disable-line

  const startButton = screen.find(`.welcome__button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
