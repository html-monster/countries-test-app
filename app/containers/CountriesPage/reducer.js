import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SET_COUNTRIES,
  SET_COUNTRY,
  SORT_COUNTRIES,
  NAME_DESCENDING,
} from './constants';

const initialState = {
  countries: [],
  country: {},
  pickedCountry: '',
  loading: false,
  loadingCountry: false,
  sortType: NAME_DESCENDING,
};

function countriesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_COUNTRIES:
      return {
        ...state,
        loading: false,
        countries: payload,
      };
    case SET_COUNTRY:
      return {
        ...state,
        loadingCountry: false,
        country: payload,
        pickedCountry: payload.name,
      };
    case GET_COUNTRIES:
      return {
        ...state, loading: true,
      };
    case GET_COUNTRY:
      return { ...state, loadingCountry: true };
    case SORT_COUNTRIES:
      return { ...state, sortType: payload };
    default:
      return state;
  }
}

export default countriesReducer;
