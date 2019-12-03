import { createSelector } from 'reselect';

const selectCountriesState = (state) => state.countries;

const selectCountries = createSelector(
  selectCountriesState,
  (countriesState) => countriesState.countries
);

export {
  selectCountries,
};
