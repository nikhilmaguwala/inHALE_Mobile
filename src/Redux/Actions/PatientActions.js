import axios from 'axios';
import {getDoctorId} from '../../helpers/helperFuntions';

let reqHeader = Object.assign({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const getPatients = () => {
  return (dispatch, state) => {
    const token = getDoctorId(state());
    return axios
      .get(`http://127.0.0.1:3000/api/patients/${token}`, reqHeader)
      .then((res) => {
        return Promise.resolve(res?.data?.data);
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  };
};

export const addPatient = (data) => {
  return () => {
    return axios
      .post('http://127.0.0.1:3000/api/patients/add-patient', data, reqHeader)
      .then((res) => {
        return Promise.resolve(res?.data?.data);
      })
      .catch((e) => {
        return Promise.reject(e);
      });
  };
};

export const getCaseHistory = (patientId) => {
  return (dispatch, state) => {
    const doctorId = getDoctorId(state());
    return axios
      .get(
        `http://127.0.0.1:3000/api/case/get-case?doctorId=${doctorId}&patientId=${patientId}`,
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
