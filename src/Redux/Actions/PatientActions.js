import axios from 'axios';

let reqHeader = Object.assign({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

export const getPatients = () => {
  return () => {
    return axios
      .get('http://127.0.0.1:3000/api/patients/', reqHeader)
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
