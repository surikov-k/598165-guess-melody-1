import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

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


it(`correctly renders`, () => {
  const {questions} = mock;
  const tree = renderer
    .create(<App
      gameTime = {0}
      errorCount = {0}
      questions={questions}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
