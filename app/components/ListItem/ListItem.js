import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ListItem = ({ item }) => (
  <li className="list-item-wrapper">
    <div className="list-item">{item}</div>
  </li>
);

ListItem.propTypes = {
  item: PropTypes.any
};

export default ListItem;
