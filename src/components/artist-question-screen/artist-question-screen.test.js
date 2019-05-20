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
        id: 0,
        picture: `img.path`,
        artist: `Artist Name 1`,
      },
      {
        id: 1,
        picture: `img.path`,
        artist: `Artist Name 2`,
      },
      {
        id: 2,
        picture: `img.path`,
        artist: `Artist Name 3`,
      },
    ],
  }
};
describe(`ArtistQuestionScreen component`, () => {

  it(`is rendered correctly`, () => {
    const {question} = mock;
    const tree = renderer.create(<ArtistQuestionScreen
      onAnswer={jest.fn()}
      question={question}
    />, {
      createNodeMock: () => {
        return {};
      }
    }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
