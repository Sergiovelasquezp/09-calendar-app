import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import moment from 'moment';
import * as ModalStyles from '../../helpers/react-modal-helpers';
import '../../styles/modal-styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../redux/action-creators/ui-actions';
import {
  calendarClearActiveEvent,
  calendarNewEvent,
  calendarUpdateEvent,
} from '../../redux/action-creators/calendar-actions';

const currentDateTime = moment().minute(0).second(0).add(1, 'hour');
const currentDateTimeForward = moment().clone().add(1, 'hour');
const initialFormState = {
  title: '',
  notes: '',
  start: currentDateTime.toDate(),
  end: currentDateTimeForward.toDate(),
};
Modal.setAppElement('#root');
const CalendarModal = (props) => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);

  const { afterOpenModal, modalLabel, children } = props;
  const [startDate, setStartDate] = useState(currentDateTime.toDate());
  const [endtDate, setEndDate] = useState(currentDateTimeForward.toDate());
  const [formValues, setFormValues] = useState(initialFormState);
  const { title, notes, start, end } = formValues;

  useEffect(() => {
    activeEvent ? setFormValues(activeEvent) : setFormValues(initialFormState);
  }, [activeEvent]);

  const handleInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleStartDateChange = (e) => {
    setStartDate(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };
  const handleEndDateChange = (e) => {
    setEndDate(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);
    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        'Error',
        'Fecha de fin debe ser mayor a la de inicio',
        'error'
      );
    }
    if (activeEvent) {
      dispatch(calendarUpdateEvent(formValues));
    } else {
      dispatch(
        calendarNewEvent({
          ...formValues,
          id: new Date().getTime(),
          user: {
            id: 12345,
            name: 'Darth Vader',
          },
        })
      );
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
    dispatch(calendarClearActiveEvent());
  };
  return (
    <Modal
      isOpen={modalOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={handleCloseModal}
      style={ModalStyles.MODAL_CENTER}
      contentLabel={modalLabel}
      className={`modal`}
      overlayClassName={`modal-fondo`}
      closeTimeoutMS={200}
    >
      <h1> {activeEvent ? 'Editar Evento' : 'Nuevo Evento'} </h1>
      <hr />
      <form className="container" onSubmit={handleSubmit}>
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
            value={title}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={notes}
            onChange={handleInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
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
};

export default CalendarModal;
