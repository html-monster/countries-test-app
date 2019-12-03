import { createSelector } from 'reselect';

const selectHome = (state) => state.home;

const selectRegions = createSelector(
  selectHome,
  (homeState) => homeState.regions
);

export {
  selectHome,
  selectRegions,
};
