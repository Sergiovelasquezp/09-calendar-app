import { fetchWithoutToken, fetchWithToken } from '../../services/auth-service';
import { AUTH_ACTIONS } from '../action-types/action-types';
import { modalResonse } from '../../helpers/modal-resopnse';
import { POST_METHOD } from '../../constants/constants';

const setTokenAndUser = (userData, dispatch) => {
  const { token, user } = userData;
  localStorage.setItem('token', token);
  localStorage.setItem('token-init-time', JSON.stringify(new Date().getTime()));
  dispatch(authLogin(user));
  console.log(userData);
};

const authLogin = (user) => ({
  type: AUTH_ACTIONS.AUTH_START_LOGIN,
  payload: user,
});

export const authStartLogin = (email, password) => {
  return async (dispatch) => {
    const res = await fetchWithoutToken(
      'auth',
      { email, password },
      POST_METHOD
    );
    const loginResult = await res.json();
    if (!loginResult.ok)
      return modalResonse('error', 'Error', loginResult.message);
    await setTokenAndUser(loginResult.data, dispatch);
  };
};

export const authStartRegister = (data) => {
  return async (dispatch) => {
    delete data.register_password_verif;
    const {
      register_name,
      register_lastName,
      register_email,
      register_password,
    } = data;
    const registrationData = {
      name: register_name,
      last_name: register_lastName,
      email: register_email,
      password: register_password,
    };
    const res = await fetchWithoutToken(
      'auth/register',
      registrationData,
      POST_METHOD
    );
    const registerResult = await res.json();
    if (!registerResult.ok)
      return modalResonse('error', 'Error', registerResult.message);
    await setTokenAndUser(registerResult.data, dispatch);
  };
};

export const authRenewToken = () => {
  return async (dispatch) => {
    const res = await fetchWithToken('auth/renew');
    const renewTokenResult = await res.json();
    console.log('renewTokenResult', renewTokenResult);
    if ('data' in renewTokenResult)
      return await setTokenAndUser(renewTokenResult.data, dispatch);
    return dispatch(authFinishChecking());
  };
};

const authFinishChecking = () => ({
  type: AUTH_ACTIONS.AUTH_FINISH_CHECKING,
});

export const authLogOutAndDestroySession = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({ type: AUTH_ACTIONS.AUTH_ON_LOGOUT });
