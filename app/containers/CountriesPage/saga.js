import {
  call, put, select, takeLatest, takeEvery
} from 'redux-saga/effects';
import { head, sort } from 'ramda';

import {
  GET_COUNTRIES,
  GET_COUNTRY,
  SORT_COUNTRIES,
  NAME_DESCENDING,
  NAME_ASCENDING,
  POPULATION_DESCENDING,
  POPULATION_ASCENDING,
} from 'containers/CountriesPage/constants';

import {
  setCountries,
  setCountry,
  setCountriesError,
  setCountryError
} from 'containers/CountriesPage/actions';
import { selectCountries } from 'containers/CountriesPage/selectors';

import request from 'utils/request';

const sortFuncList = {
  [NAME_DESCENDING]: (a, b) => a.name.localeCompare(b.name),
  [NAME_ASCENDING]: (a, b) => b.name.localeCompare(a.name),
  [POPULATION_DESCENDING]: (a, b) => a.population / a.area - b.population / b.area,
  [POPULATION_ASCENDING]: (a, b) => b.population / b.area - a.population / a.area,
};

export function* sortCountries({ payload: sortType }) {
  const countries = yield select(selectCountries);

  yield put(setCountries(sort(sortFuncList[sortType], countries)));
}
export function* getCountries(action) {
  const requestURL = `https://restcountries.eu/rest/v2/region/${action.payload}?fields=name;population;area`;

  try {
    const countries = yield call(request, requestURL);

    yield put(setCountries(countries));
  } catch (err) {
    yield put(setCountriesError());
  }
}
export function* getCountry({ payload }) {
  const requestURL = `https://restcountries.eu/rest/v2/name/${payload}`;

  try {
    const countries = yield call(request, requestURL);

    yield put(setCountry(head(countries)));
  } catch (err) {
    yield put(setCountryError());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* countriesData() {
  yield takeLatest(GET_COUNTRIES, getCountries);
  yield takeLatest(GET_COUNTRY, getCountry);
  yield takeEvery(SORT_COUNTRIES, sortCountries);
}
