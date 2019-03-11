import React from 'react'
// import PropTypes from 'prop-types';


const Header = props => {

  const {branding} = props;  
  return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">{branding}</a>
        </div>
        <div>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
            </ul>
        </div>
      </nav>
  )
}

export default Header;
