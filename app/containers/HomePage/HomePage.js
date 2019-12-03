import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import ErrorWrapper from 'helpers/ErrorWrapper';
import LoaderWrapper from 'helpers/LoaderWrapper';
import List from 'components/List';
import RegionListItem from 'containers/RegionListItem';

import './style.scss';

const HomePage = ({
  loading, error, regions, getRegion
}) => (
  <article>
    <Helmet>
      <title>Home Page</title>
      <meta name="description" content="Get region" />
    </Helmet>
    <div className="home-page page">
      <section className="centered">
        <h1>Regions</h1>
      </section>
      <section className="content">
        {
          (!regions.length && !loading) && <button type="submit" className="btn btn-green" onClick={getRegion}>Get regions</button>
        }
        <ErrorWrapper error={error}>
          <LoaderWrapper loading={loading}>
            {!!regions.length && <List items={regions} component={RegionListItem} keyName="name" />}
          </LoaderWrapper>
        </ErrorWrapper>
      </section>
    </div>
  </article>
);

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  regions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  getRegion: PropTypes.func,
};

export default HomePage;
