import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <strong>
          <Link to="/">
            Find necessary country
          </Link>
        </strong>
      </div>
    );
  }
}

export default Header;
