import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from '../../custom-hooks/useForm';
import { modalResonse } from '../../helpers/modal-resopnse';
import {
  authStartLogin,
  authStartRegister,
} from '../../redux/action-creators/auth-actions';

//styles
import '../../styles/login.css';
const LoginPage = () => {
  const dispatch = useDispatch();
  const [loginFormValues, handleLoginInputChange] = useForm({
    login_email: 'athlasdev@test.com',
    login_password: '12456',
  });
  const { login_email, login_password } = loginFormValues;

  const [registerFormValues, handleRegisterInputChange] = useForm({
    register_email: 'testdev3@test.com',
    register_name: 'dev1',
    register_lastName: 'athlas',
    register_password: '123456',
    register_password_verif: '123456',
  });
  const {
    register_email,
    register_name,
    register_lastName,
    register_password,
    register_password_verif,
  } = registerFormValues;

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(authStartLogin(login_email, login_password));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (register_password !== register_password_verif)
      return modalResonse(
        'error',
        'Error',
        'password y verificacion no coinciden'
      );
    dispatch(authStartRegister(registerFormValues));
  };

  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Ingreso</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Correo"
                name="login_email"
                value={login_email}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="login_password"
                value={login_password}
                onChange={handleLoginInputChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={handleRegister}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                name="register_name"
                value={register_name}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                name="register_lastName"
                value={register_lastName}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                name="register_email"
                value={register_email}
                onChange={handleRegisterInputChange}
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="register_password"
                value={register_password}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Repita la contraseña"
                name="register_password_verif"
                value={register_password_verif}
                onChange={handleRegisterInputChange}
              />
            </div>

            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
