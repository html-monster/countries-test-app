import {
  GET_REGIONS, SET_REGIONS
} from './constants';

const initialState = {
  regions: [],
  loading: false,
  error: false
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_REGIONS:
      return { ...state, loading: false, regions: action.payload };
    case GET_REGIONS:
      return { ...state, loading: true, error: false };
    default:
      return state;
  }
}

export default homeReducer;
