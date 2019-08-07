import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => (
  <nav className="col-md-2 d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-item nav-link" activeClassName="active" to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-item nav-link" activeClassName="active" to="/comprar-consultas">
            Comprar Consultas
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Sidebar;
