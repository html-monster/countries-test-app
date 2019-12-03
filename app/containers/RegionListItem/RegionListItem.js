/**
 * RegionListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ListItem from 'components/ListItem';

const RegionListItem = ({ item }) => {
  const content = (
    <div className="region-list-item">
      <Link className="region-list-item__link" to={`/countries/${item.name.toLowerCase()}`}>
        <span>{item.name}</span>
      </Link>
    </div>
  );

  // Render the content into a list item
  return (
    <ListItem key={`region-list-item-${item.name}`} item={content} />
  );
};

RegionListItem.propTypes = {
  item: PropTypes.object,
};

export default RegionListItem;
