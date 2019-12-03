import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Country from 'components/Country';
import List from 'components/List';
import LoaderWrapper from 'helpers/LoaderWrapper';
import CountriesListItem from 'containers/CountriesListItem';

import {
  NAME_DESCENDING,
  NAME_ASCENDING,
  POPULATION_DESCENDING,
  POPULATION_ASCENDING,
} from './constants';

import './style.scss';

export default class CountriesPage extends React.Component {
  componentDidMount() {
    const { getCountries, sortCountries, match: { params: { id } } } = this.props;

    getCountries(id);
    sortCountries();
  }

  sortCountries = (event) => {
    const { sortCountries } = this.props;
    const sortType = event.target.value;

    sortCountries(sortType);
  };

  render() {
    const {
      loading, loadingCountry, countries, country, sortType
    } = this.props;

    return (
      <div className="country-page">
        <Helmet>
          <title>Country Page</title>
          <meta
            name="description"
            content="List of countries"
          />
        </Helmet>
        <div className="page">
          <section className="centered">
            <Link className="page-back" to="/" title="Back to regions">⟵</Link>
            <h1>Countries</h1>
          </section>
          <section className="content">
            <div className="countries-list">
              <div className="sort-panel">
                <strong className="sort-panel__title">Sort by:</strong>
                <select className="sort-panel__sort-list" onChange={this.sortCountries} value={sortType}>
                  <option value={NAME_DESCENDING}>Name ⬇</option>
                  <option value={NAME_ASCENDING}>Name ⬆</option>
                  <option value={POPULATION_DESCENDING}>Population density ⬇</option>
                  <option value={POPULATION_ASCENDING}>Population density ⬆</option>
                </select>
              </div>
              <LoaderWrapper loading={loading}>
                {!!countries.length && <List items={countries} component={CountriesListItem} keyName="name" />}
              </LoaderWrapper>
            </div>
            <Country
              loadingCountry={loadingCountry}
              country={country}
            />
          </section>
        </div>
      </div>
    );
  }
}

CountriesPage.propTypes = {
  loading: PropTypes.bool,
  loadingCountry: PropTypes.bool,
  match: PropTypes.object,
  countries: PropTypes.arrayOf({
    name: PropTypes.string,
    population: PropTypes.number,
    area: PropTypes.number,
  }),
  country: PropTypes.object,
  sortType: PropTypes.string,
  getCountries: PropTypes.func,
  sortCountries: PropTypes.func,
};
