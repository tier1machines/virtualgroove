import * as types from '../constants/types';

const initialState = {
  currentVideo: '',
  index: '',
  status: '',
  queue: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
	case types.ADD_TRACK:
	  const queueCopyAdd = Object.assign([], state.queue);
	  queueCopyAdd.push(action.payload);
	  return {
		...state,
		queue: queueCopyAdd
	  }

	case types.SET_CURRENT_VIDEO:
	  return {
		...state,
		currentVideo: action.payload.video.id.videoId,
		index: action.payload.index,
	  }

	case types.REMOVE_VIDEO:
	  const queueCopyRemove = Object.assign([], state.queue);
	  queueCopyRemove.splice(state.index, 1);
	  return {
		...state,
		queue: queueCopyRemove
	  }

	default:
	  return state;

  }
};


