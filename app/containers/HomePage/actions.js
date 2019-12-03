import {
  GET_REGIONS, SET_REGIONS
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
