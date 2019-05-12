import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';

const mock = {
  question: {
    type: `artist`,
    song: {
      artist: `Artist Name 2`,
      src: `song.path`,
    },
    answers: [
      {
        picture: `img.path`,
        artist: `Artist Name 1`,
      },
      {
        picture: `img.path`,
        artist: `Artist Name 2`,
      },
      {
        picture: `img.path`,
        artist: `Artist Name 3`,
      },
    ],
  }
};

it(`is rendered correctly`, () => {
  const {question} = mock;
  const tree = renderer.create(<ArtistQuestionScreen
    onAnswer={jest.fn()}
    question={question}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});
