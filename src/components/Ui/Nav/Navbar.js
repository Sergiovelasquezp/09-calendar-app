import React from 'react';

const Navbar = () => {
  return (
      <div>
        <div className="navbar navbar-dark bg-dark mb-4">
          <span className="navbar-brand">CalendarApp</span>
          <button className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt"></i>
            <span>Salir</span>
          </button>
        </div>
      </div>
  );
};

export default Navbar;
