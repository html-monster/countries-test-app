import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const makeSelectRegions = () => createSelector(
  selectHome,
  (homeState) => homeState.regions
);
const makeSelectLoading = () => createSelector(
  selectHome,
  (homeState) => homeState.loading
);

export {
  selectHome,
  makeSelectRegions,
  makeSelectLoading,
};
