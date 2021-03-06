import {USER_DETAIL, AUTH_TOKEN, RESET_STORE} from '../Types';
import axios from 'axios';

let reqHeader = Object.assign({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const login = (userData) => {
  return (dispatch) => {
    return axios
      .post('http://192.168.0.105:3000/api/doctor/login', userData, reqHeader)
      .then((res) => {
        if (res?.data?.status === 1) {
          dispatch({
            type: USER_DETAIL,
            payload: res?.data?.data,
          });
          dispatch({
            type: AUTH_TOKEN,
            payload: res?.data?.data?.token ?? '',
          });
          return Promise.resolve(res?.data);
        } else {
          return Promise.reject(res.data);
        }
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(
        {
          type: RESET_STORE,
        },
        1000,
      );
    });
    return Promise.resolve(true);
  };
};
