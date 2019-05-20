import React from 'react';
import renderer from 'react-test-renderer';

import AudioPlayer from './audio-player.jsx';

describe(`AudioPlayer component`, () => {
  it(`renders correctly`, () => {
    const isPlaying = false;
    const onPlayButtonClick = jest.fn();
    const src = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

    const tree = renderer.create(
        <AudioPlayer
          isPlaying={isPlaying}
          onPlayButtonClick={onPlayButtonClick}
          src={src}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
