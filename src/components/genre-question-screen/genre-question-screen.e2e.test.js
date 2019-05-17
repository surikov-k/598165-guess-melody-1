import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenreQuestionScreen from "./genre-question-screen.jsx";

configure({adapter: new Adapter()});

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

it(`doesn't send form when user answers the question`, () => {
  const {question} = mock;
  const onAnswer = jest.fn();
  const genreQuestion = mount(<GenreQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const form = genreQuestion.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
