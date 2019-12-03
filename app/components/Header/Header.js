import React from 'react';

import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <strong>
          <a href="/">
            Find necessary country
          </a>
        </strong>
      </div>
    );
  }
}

export default Header;
