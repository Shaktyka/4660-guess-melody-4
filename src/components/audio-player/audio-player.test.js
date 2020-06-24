import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player.jsx';

const SRC = `https://www.youtube.com/audiolibrary_download?vid=79100e44c826e2f7`;
const IS_PLAYING = false;

describe(`AudioPlayer rendering`, () => {

  it(`AudioPlayer renders correctly`, () => {
    const tree = renderer.create(
        <AudioPlayer
          isPlaying={IS_PLAYING}
          onPlayButtonClick={() => {}}
          src={SRC}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON;

    expect(tree).toMatchSnapshot();
  });

});
