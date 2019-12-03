import React from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from 'ramda';

import LoaderWrapper from 'helpers/LoaderWrapper';

import './style.scss';

const Country = ({
  loadingCountry,
  country,
  country: {
    name, nativeName, capital, area, population, subregion, flag
  }
}) => {
  if (!isEmpty(country) || loadingCountry) {
    return (
      <div className="country">
        <LoaderWrapper loading={loadingCountry}>
          <div className="country__header">
            <img className="country__img" src={flag} alt="Country flag" />
            <h3 className="country__name">{name}</h3>
          </div>
          <ul className="country__info">
            {nativeName && <li className="country__item">Native name: <strong>{nativeName}</strong></li>}
            {capital && <li className="country__item">Capital: <strong>{capital}</strong></li>}
            {area && <li className="country__item">Area: <strong>{area} km²</strong></li>}
            {population && <li className="country__item">Population: <strong>{population}</strong></li>}
            {subregion && <li className="country__item">Subregion: <strong>{subregion}</strong></li>}
          </ul>
        </LoaderWrapper>
      </div>
    );
  }

  return (
    <div className="country">
      <div className="country__preview">
        <h3 className="country__preview__title">Pick a country</h3>
      </div>
    </div>
  );
};


Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string,
    capital: PropTypes.string,
    area: PropTypes.number,
    population: PropTypes.number,
    flag: PropTypes.string,
    subregion: PropTypes.string,
  }),
  loadingCountry: PropTypes.bool,
};

export default Country;
