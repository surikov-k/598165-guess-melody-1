import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioPlayer from './audio-player.jsx';

configure({adapter: new Adapter()});

describe(`AudioPlayer component`, () => {

  it(`should start playing on play button click`, () => {
    const isPlaying = false;
    const onPlayButtonClick = jest.fn();
    const src = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

    const player = mount(<AudioPlayer
      isPlaying={isPlaying}
      onPlayButtonClick={onPlayButtonClick}
      src={src}
    />);

    const playButton = player.find(`.track__button`);

    window.HTMLMediaElement.prototype.pause = () => {};
    player.setState({isLoading: false});

    playButton.simulate(`click`);
    player.update();
    expect(player.state(`isPlaying`)).toBe(true);
  });

  it(`should stop playing on pause button click`, () => {
    const isPlaying = true;
    const onPlayButtonClick = jest.fn();
    const src = `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`;

    const player = mount(<AudioPlayer
      isPlaying={isPlaying}
      onPlayButtonClick={onPlayButtonClick}
      src={src}
    />);

    const playButton = player.find(`.track__button`);

    window.HTMLMediaElement.prototype.play = () => {};
    player.setState({isLoading: false});

    playButton.simulate(`click`);
    player.update();
    expect(player.state(`isPlaying`)).toBe(false);
  });
});

