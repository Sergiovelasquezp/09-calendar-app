import React from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../redux/action-creators/ui-actions';

export const Fab = (props) => {
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <button className="btn-primary fab" onClick={handleOpenModal}>
      <i class="fas fa-plus    "></i>
    </button>
  );
};
