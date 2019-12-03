import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SET_COUNTRIES,
  SET_COUNTRY,
  SORT_COUNTRIES,
  NAME_DESCENDING,
} from './constants';

export function getCountries(regionName) {
  return {
    type: GET_COUNTRIES,
    payload: regionName,
  };
}
export function getCountry(countryName) {
  return {
    type: GET_COUNTRY,
    payload: countryName,
  };
}
export function setCountries(countries) {
  return {
    type: SET_COUNTRIES,
    payload: countries
  };
}
export function setCountry(country) {
  return {
    type: SET_COUNTRY,
    payload: country
  };
}
export function sortCountries(sortType = NAME_DESCENDING) {
  return {
    type: SORT_COUNTRIES,
    payload: sortType
  };
}
