const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const QUESTIONS_DATA = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`,
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`,
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Audionautix`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}/${Math.random() * 100}`,
        artist: `Kevin MacLeod`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random() * 100}`,
        artist: `Jingle Punks`,
      },
      {
        picture: `${AVATAR_URL}/${Math.random() * 100}`,
        artist: `Lordi`,
      }
    ]
  }
];

export default QUESTIONS_DATA;
