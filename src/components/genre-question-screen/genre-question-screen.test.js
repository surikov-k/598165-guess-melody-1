import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen.jsx';

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        id: 0,
        src: `test.mp3`,
        genre: `rock`,
      },
      {
        id: 1,
        src: `test.mp3`,
        genre: `blues`,
      },
      {
        id: 2,
        src: `test.mp3`,
        genre: `jazz`,
      },
      {
        id: 3,
        src: `test.mp3`,
        genre: `rock`,
      },
    ],
  },
};

it(`renders properly`, () => {
  const {
    question
  } = mock;
  const tree = renderer.create(<GenreQuestionScreen
    onAnswer={jest.fn()}
    question={question}
  />).toJSON();
  expect(tree).toMatchSnapshot();
});
