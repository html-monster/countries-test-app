import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SET_COUNTRIES,
  SET_COUNTRY,
  SET_COUNTRIES_ERROR,
  SET_COUNTRY_ERROR,
  SORT_COUNTRIES,
  NAME_DESCENDING,
} from './constants';

const initialState = {
  countries: [],
  country: {},
  pickedCountry: '',
  loading: false,
  loadingCountry: false,
  errorCountriesList: false,
  errorCountry: false,
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
    case SET_COUNTRIES_ERROR:
      return {
        ...state, errorCountriesList: true, loading: false,
      };
    case SET_COUNTRY_ERROR:
      return { ...state, errorCountry: true, loadingCountry: false };
    case GET_COUNTRIES:
      return {
        ...state, setCountriesError: false, loading: true,
      };
    case GET_COUNTRY:
      return { ...state, setCountryError: false, loadingCountry: true };
    case SORT_COUNTRIES:
      return { ...state, sortType: payload };
    default:
      return state;
  }
}

export default countriesReducer;
