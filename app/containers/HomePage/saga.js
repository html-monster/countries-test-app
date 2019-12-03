import {
  call, put, takeEvery
} from 'redux-saga/effects';
import { find, propEq } from 'ramda';

import { GET_REGIONS } from 'containers/HomePage/constants';

import { setRegion } from 'containers/HomePage/actions';


import request from 'utils/request';

export function* getRegions() {
  const requestURL = 'https://restcountries.eu/rest/v2/all?fields=region';

  try {
    const allCountries = yield call(request, requestURL);
    const allRegions = allCountries.reduce((acc, { region }) => {
      if (region && !find(propEq('name', region), acc)) {
        acc.push({ name: region });
      }

      return acc;
    }, []);
    yield put(setRegion(allRegions));
  } catch (err) {
    console.error(err);
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* countriesData() {
  yield takeEvery(GET_REGIONS, getRegions);
}
