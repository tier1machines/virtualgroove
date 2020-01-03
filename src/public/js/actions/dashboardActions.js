import axios from 'axios';
import * as types from '../constants/types';
import isEmpty from '../utils/is-empty';
import store from '../store';

// Add a track
export const addTrack = video => dispatch => {
  // If no items in the queue, load selected video
  console.log(store.getState().dashboard);
  if (isEmpty(store.getState().dashboard.queue)) {
    dispatch({
      type: types.SET_CURRENT_VIDEO,
      payload: { video, index: 0 }
    });
  }
  dispatch({
    type: types.ADD_TRACK,
    payload: video
  })
  if (!isEmpty(store.getState().dashboard.reco)) {
	setTimeout(() => {
	  dispatch({
		type: types.ADD_TRACK,
		payload: store.getState().dashboard.reco
	  })
	}, 5000);
  };
};

// Set current video
export const setCurrentVideo = (video, index) => {
  return {
    type: types.SET_CURRENT_VIDEO,
    payload: { video, index }
  }
};

//remove video
export const removeVideo = index => {
  return {
    type: types.REMOVE_VIDEO,
    payload: index
  }
};

export const addReco = video => {
  return {
	type: types.ADD_RECO,
	payload: video
  }
};
