import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><div class="form-check form-switch color" onClick={props.toogleMode} >
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>Dark Mode</a></li>
                  <hr />
                  <li><a className="dropdown-item" href="#" ><div class="form-check form-switch color" onClick={props.toogleMode2} >
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>Green Mode</a></li>
                  <hr />
                  <li><a className="dropdown-item" href="#" ><div class="form-check form-switch color" onClick={props.toogleMode3} >
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>Red Mode</a></li>
                  <hr />
                  <li><a className="dropdown-item" href="#" ><div class="form-check form-switch color" onClick={props.toogleMode4} >
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                  </div>syan Mode</a></li>
                  <hr />
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">{props.aboutText}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}


Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
}


Navbar.defaultProps = {
  title: "Set Title",
  aboutText: "Set Text"
}