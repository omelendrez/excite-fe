import api from "./api";

export const getRecords = (endpoint) => {
  return new Promise((resolve, reject) => {
    api
      .get(endpoint)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const getRecordById = (endpoint) => {
  return new Promise((resolve, reject) => {
    api
      .get(endpoint)
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

export const deleteRecord = (endpoint) => {
  return new Promise((resolve, reject) => {
    api
      .delete(endpoint)
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

export const getPathProps = (path) =>
  JSON.parse(localStorage.getItem(path.replace("/", ""))) || {};

export const setPathProps = (path, props) =>
  localStorage.setItem(path.replace("/", ""), JSON.stringify(props));
