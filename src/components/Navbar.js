import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#">{props.title}</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{props.about}</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <div className={`form-check form-switch text-${props.mode === 'light' ?'dark' : 'light'}`} >
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    {props.mode === 'dark' ? 'Enable Light Mode' : 'Enable Dark Mode'}
                  </label>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

