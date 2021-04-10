import api from "./api";

export const getRecords = (endpoint) => {
  return new Promise((resolve, reject) => {
    api
      .get(endpoint)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const getActiveRecords = (endpoint, id) => {
  return new Promise((resolve, reject) => {
    api
      .get(`${endpoint}-activos/${id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const getRecordById = (endpoint, id) => {
  return new Promise((resolve, reject) => {
    api
      .get(`${endpoint}/${id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const addRecord = (endpoint, record) => {
  return new Promise((resolve, reject) => {
    api
      .post(endpoint, record)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const updateRecord = (endpoint, record) => {
  return new Promise((resolve, reject) => {
    api
      .put(`${endpoint}/${record.ID}`, record)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const deleteRecord = (endpoint, id) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`${endpoint}/${id}`)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};
