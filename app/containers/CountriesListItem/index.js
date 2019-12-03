import { connect } from 'react-redux';

import { getCountry } from 'containers/CountriesPage/actions';
import CountriesListItem from './CountriesListItem';

const mapStateToProps = ({ countries: countriesState }) => ({
  pickedCountry: countriesState.pickedCountry
});

const mapDispatchToProps = (dispatch) => ({
  getCountry: (countryName) => () => dispatch(getCountry(countryName)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesListItem);
