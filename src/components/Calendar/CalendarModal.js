import React, {useState} from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import * as ModalStyles from '../../helpers/react-modal-helpers';
import  '../../styles/modal-styles.css';

Modal.setAppElement('#root');
const CalendarModal = (props) => {
  const { modalIsOpen, afterOpenModal, modalLabel, children } = props;

  const [isOpen, setIsOpen] = useState(modalIsOpen);

  const closeModal = () => {
    setIsOpen(false);
  }
  return (
      <Modal
          isOpen={isOpen}
          // onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={ModalStyles.MODAL_CENTER}
          contentLabel={modalLabel}
          className={`modal`}
          overlayClassName={`modal-fondo`}
          closeTimeoutMS={200}
      >
        {/*{ children }*/}
        <h1>Hello!</h1>
        <hr/>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </Modal>
  );
};

CalendarModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  afterOpenModal: PropTypes.func,
  // closeModal: PropTypes.func,
  modalLabel: PropTypes.string,
}

export default CalendarModal;
