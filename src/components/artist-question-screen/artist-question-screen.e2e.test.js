import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArtistQuestionScreen from './artist-question-screen.jsx';

configure({adapter: new Adapter()});

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

it(`doesn't send form when user answers the question`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const artistQuestion = mount(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const form = artistQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`change`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
