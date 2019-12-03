import { connect } from 'react-redux';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { getCountries, sortCountries } from './actions';
import {
  selectCountries,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import CountriesPage from './CountriesPage';

const mapDispatchToProps = (dispatch) => ({
  sortCountries: (sortType) => dispatch(sortCountries(sortType)),
  getCountries: (sortType) => dispatch(getCountries(sortType)),
});

const mapStateToProps = (state) => {
  const { countries: countriesState } = state
  return {
    countries: selectCountries(state),
    country: countriesState.country,
    loading: countriesState.loading,
    loadingCountry: countriesState.loadingCountry,
    sortType: countriesState.sortType,
    errorCountriesList: countriesState.errorCountriesList,
    errorCountry: countriesState.errorCountry,
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'countries', reducer });
const withSaga = injectSaga({ key: 'countries', saga });

export default compose(withReducer, withSaga, withConnect)(CountriesPage);
export { mapDispatchToProps };
