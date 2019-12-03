import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import ListItem from 'components/ListItem';

const CountriesListItem = ({ item, pickedCountry, getCountry }) => {
  const content = (
    <div
      className={cn('country-list-item', {
        active: pickedCountry === item.name
      })}
      onClick={getCountry(item.name)}
    >
      <span>{item.name}</span>
    </div>
  );

  // Render the content into a list item
  return (
    <ListItem key={`country-list-item-${item.name}`} item={content} />
  );
};

CountriesListItem.propTypes = {
  item: PropTypes.object,
  pickedCountry: PropTypes.string,
  getCountry: PropTypes.func,
};

export default CountriesListItem;
