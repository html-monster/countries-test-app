import { createSelector } from 'reselect';

const selectCountries = (state) => state.countries;

const makeSelectCountries = () => createSelector(
  selectCountries,
  (countriesState) => countriesState.countries
);
const makeSelectCountry = () => createSelector(
  selectCountries,
  (countriesState) => countriesState.country
);
const makeSelectPickedCountry = () => createSelector(
  selectCountries,
  (countriesState) => countriesState.pickedCountry
);
const makeSelectLoading = () => createSelector(
  selectCountries,
  (countriesState) => countriesState.loading
);
const makeSelectLoadingCountry = () => createSelector(
  selectCountries,
  (countriesState) => countriesState.loadingCountry
);
const makeSelectSortType = () => createSelector(
  selectCountries,
  (countriesState) => countriesState.sortType
);

export {
  selectCountries,
  makeSelectCountries,
  makeSelectCountry,
  makeSelectPickedCountry,
  makeSelectLoading,
  makeSelectLoadingCountry,
  makeSelectSortType,
};
