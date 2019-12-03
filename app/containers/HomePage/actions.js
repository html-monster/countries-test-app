import {
  GET_REGIONS,
  SET_REGIONS,
  SET_ERROR
} from './constants';

export function getRegion() {
  return {
    type: GET_REGIONS
  };
}
export function setRegion(regions) {
  return {
    type: SET_REGIONS,
    payload: regions
  };
}
export function setError(regions) {
  return {
    type: SET_ERROR,
    payload: regions
  };
}
