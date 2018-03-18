import React from 'react';
import { NavLink } from 'react-router-dom';
import { row, column } from 'reactstrap';

const Header = () => (
  <div className="row card-header">
    <div className="col-sm-12">
        <h1 className="card-title" id="header-title">My App</h1>
        <NavLink to="/" className="btn btn-primary" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    </div>
  </div>
);

export default Header;
