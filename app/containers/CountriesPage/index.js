import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { getCountries, sortCountries } from './actions';
import {
  makeSelectCountries,
  makeSelectCountry,
  makeSelectLoading,
  makeSelectLoadingCountry,
  makeSelectSortType,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import CountriesPage from './CountriesPage';

const mapDispatchToProps = (dispatch) => ({
  sortCountries: (sortType) => dispatch(sortCountries(sortType)),
  getCountries: (sortType) => dispatch(getCountries(sortType)),
});

const mapStateToProps = createStructuredSelector({
  countries: makeSelectCountries(),
  country: makeSelectCountry(),
  loading: makeSelectLoading(),
  loadingCountry: makeSelectLoadingCountry(),
  sortType: makeSelectSortType(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'countries', reducer });
const withSaga = injectSaga({ key: 'countries', saga });

export default compose(withReducer, withSaga, withConnect)(CountriesPage);
export { mapDispatchToProps };
