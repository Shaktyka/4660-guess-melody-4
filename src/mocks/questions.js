const AVATAR_URL = `https://api.adorable.io/avatars/128`;

const QUESTIONS_DATA = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=a127d9b7de8a17cf`,
        genre: `country`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
        genre: `rock`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=dfb828f40096184c`,
        genre: `r&b`,
      },
      {
        src: `https://www.youtube.com/audiolibrary_download?vid=bcbe5be936a32fb1`,
        genre: `pop`,
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Jingle Punks`,
      src: `https://www.youtube.com/audiolibrary_download?vid=dc3b4dc549becd6b`,
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
