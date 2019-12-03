import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const List = ({ component, items, keyName = 'id' }) => {
  const ComponentToRender = component;
  let content = (<div></div>);

  // If we have items, render them
  if (items) {
    content = items.map((item) => (
      <ComponentToRender key={`item-${item[keyName]}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
    content = (<ComponentToRender />);
  }

  return (
    <div className="list-wrapper">
      <ul>
        {content}
      </ul>
    </div>
  );
};

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
  keyName: PropTypes.string,
};

export default List;
