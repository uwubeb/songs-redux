import { combineReducers } from 'redux';

// Reducers are responsible for updating the state of the application.
const songsReducer = () => {
  return [
    { title: 'Reputation', duration: '4:05' },
    { title: 'The Next Episode', duration: '3:45' },
    { title: 'The One I Love', duration: '5:00' },
    { title: 'The One I Hate', duration: '3:15' },
    { title: 'The One I Want', duration: '4:00' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
