import React, {useState} from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';
import * as ModalStyles from '../../helpers/react-modal-helpers';
import  '../../styles/modal-styles.css';
import moment from 'moment';

Modal.setAppElement('#root');
const CalendarModal = (props) => {
  const currentDateTime = moment().minute(0).second(0).add(1, 'hour');
  const currentDateTimeForward = moment().clone().add(1, 'hour');
  const { modalIsOpen, afterOpenModal, modalLabel, children } = props;
  const [isOpen, setIsOpen] = useState(modalIsOpen);
  const [startDate, setStartDate] = useState(currentDateTime.toDate());
  const [endtDate, setEndDate] = useState(currentDateTimeForward.toDate());
  const handleStartDateChange = (e) => {
    setStartDate(e);
  }
  const handleEndDateChange = (e) => {
    setEndDate(e);
  }

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
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container">

            <div className="form-group">
                <label>Fecha y hora inicio</label>
                {/* <input className="form-control" placeholder="Fecha inicio" /> */}
                <DateTimePicker
                  className="form-control"
                  onChange={handleStartDateChange}
                  value={startDate}
                />
            </div>

            <div className="form-group">
                <label>Fecha y hora fin</label>
                <DateTimePicker
                  className="form-control"
                  onChange={handleEndDateChange}
                  value={endtDate}
                  minDate={startDate}
                />
            </div>

            <hr />
            <div className="form-group">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
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
