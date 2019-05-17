import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app.jsx';

configure({adapter: new Adapter()});

const mock = {
  questions: [
    {
      type: `genre`,
      genre: `rock`,
      answers: [
        {
          id: 0,
          src: `path`,
          genre: `rock`,
        },
        {
          id: 1,
          src: `path`,
          genre: `jazz`,
        },
        {
          id: 2,
          src: `path`,
          genre: `blues`,
        },
        {
          id: 3,
          src: `path`,
          genre: `rock`,
        },
      ],
    },
  ],
};

it(`swiches to the first question on WelcomeScreen button click`, () => {
  const {questions} = mock;
  const app = mount(<App
    errorCount={0}
    gameTime={0}
    questions={questions}
  />);

  const button = app.find(`button`);
  button.simulate(`click`);
  app.update();

  expect(app.state(`question`)).toEqual(0);
  const title = app.find(`.game__title`);
  expect(title).toHaveLength(1);
  expect(title.text().indexOf(`rock`)).toBeGreaterThanOrEqual(0);
});
