import axios from 'axios';
import * as types from '../constants/types';

// Add a track
export const addTrack = video => {
  return {
	type: types.ADD_TRACK,
	payload: video
  }
};


// Set current video
