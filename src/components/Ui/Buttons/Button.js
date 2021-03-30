import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/action-creators/ui-actions';
import { BUTTON_TYPES } from './button-types';

const Button = (props) => {
  const dispatch = useDispatch();
  const { children, type, color, handleClickEvent } = props;
  const [buttonType, setButtonType] = useState({});
  useEffect(() => {
    if (type) {
      setButtonType(BUTTON_TYPES[type]);
    }
  }, [type]);

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <button
      onClick={handleClickEvent ? handleClickEvent : handleOpenModal}
      className={`btn btn-${color ? color : buttonType.btn_color} ${
        buttonType.custon_class
      }`}
    >
      {buttonType.icon && <i className={`fas ${buttonType.icon}`}></i>}
      {children}
      {buttonType.label}
    </button>
  );
};

export default Button;
