import {
  GET_REGIONS,
  SET_REGIONS,
  SET_ERROR,
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
    case SET_ERROR:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
}

export default homeReducer;
