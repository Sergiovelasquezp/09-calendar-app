import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogOutAndDestroySession } from '../../../redux/action-creators/auth-actions';

const Navbar = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(authLogOutAndDestroySession());
  };
  return (
    <div>
      <div className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand">{name}</span>
        <button onClick={handleLogOut} className="btn btn-outline-danger">
          <i className="fas fa-sign-out-alt"></i>
          <span>Salir</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
