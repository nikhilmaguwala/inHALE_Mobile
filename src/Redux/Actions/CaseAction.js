import axios from 'axios';
import {getDoctorId} from '../../helpers/helperFuntions';

let reqHeader = Object.assign({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const predictResult = (resultNo) => {
  return () => {
    return axios
      .get(`http://192.168.0.105:3000/api/inhale/predict/${resultNo}`, reqHeader)
      .then((res) => {
        return Promise.resolve(res?.data?.data);
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  };
};

export const addCase = (diagnosis, patientId) => {
  return (dispatch, state) => {
    const doctorId = getDoctorId(state());
    return axios
      .post(
        'http://192.168.0.105:3000/api/case/add-case',
        {
          patientId,
          diagnosis,
          doctorId,
        },
        reqHeader,
      )
      .then((res) => {
        return Promise.resolve(res?.data?.data);
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  };
};
