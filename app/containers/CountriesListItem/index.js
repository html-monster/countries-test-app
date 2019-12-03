import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { getCountry } from 'containers/CountriesPage/actions';
import CountriesListItem from './CountriesListItem';
import { makeSelectPickedCountry } from '../CountriesPage/selectors';

const mapStateToProps = createStructuredSelector({
  pickedCountry: makeSelectPickedCountry(),
});

const mapDispatchToProps = (dispatch) => ({
  getCountry: (countryName) => () => dispatch(getCountry(countryName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesListItem);
