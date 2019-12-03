import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import LoaderWrapper from 'helpers/LoaderWrapper';
import List from 'components/List';
import RegionListItem from 'containers/RegionListItem';

import './style.scss';

const HomePage = ({
  loading, regions, getRegion
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
        <LoaderWrapper loading={loading}>
          {!!regions.length && <List items={regions} component={RegionListItem} keyName="name" />}
        </LoaderWrapper>
      </section>
    </div>
  </article>
);

HomePage.propTypes = {
  loading: PropTypes.bool,
  regions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  getRegion: PropTypes.func,
};

export default HomePage;
