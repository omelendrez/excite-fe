import moment from "moment";
import "moment/locale/es";
import tableFields from "./commonTableFields.json";

export const sortColumn = (a, b, fieldName) =>
  a[fieldName] < b[fieldName] ? -1 : a[fieldName] > b[fieldName] ? 1 : 0;

export const formatAmount = (value = 0) =>
  value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

export const formatDate = (date) => moment(date).format("L");
//export const formatDate = (date) => moment(date).add(-3, "hours").format("L");  // For local environment

export const formatInputDate = (date) => moment(date);

const createSelectList = (records, id, text, filter = null) => {
  const uniqueList = [];
  records
    .filter((item) => !filter || item[filter].toLowerCase() === "activo")
    .forEach((record) => {
      if (!uniqueList.find((item) => item.id === record[id])) {
        uniqueList.push({
          id: record[id],
          text: record[text],
        });
      }
    });
  return uniqueList.sort((a, b) => sortColumn(a, b, "text"));
};

export const statuses = [
  { id: "A", text: "ACTIVO" },
  { id: "I", text: "INACTIVO" },
];

export const sexos = [
  { id: "", text: "INDEFINIDO" },
  { id: "FEMENINO", text: "FEMENINO" },
  { id: "MASCULINO", text: "MASCULINO" },
];

export const interior = [
  { id: "BAHIA BLANCA", text: "BAHIA BLANCA" },
  { id: "INTERIOR", text: "INTERIOR" },
];

export const getSelectList = (modelName, data) => {
  let table = data;
  const field = tableFields.find((model) => model.model === modelName);
  switch (modelName) {
    case "statuses":
      table = statuses;
      break;
    case "sexos":
      table = sexos;
      break;
    case "interior":
      table = interior;
      break;
    default:
  }
  return createSelectList(table, field.id, field.text, field.status);
};

export const setFields = (fields, record) => {
  return fields.map((field) => ({
    title: field.title,
    value: record[field.name],
    options: field.options,
    type: field.type,
  }));
};

export const cleanFields = (fields, record) => {
  const values = {};
  fields.forEach((field) => {
    if (!field.hidden || field.name === "ID") {
      values[field.name] = record[field.name];
    }
  });
  return values;
};

const logTypes = {
  success: "background:green;color:white;padding:3px",
  warning: "background:orange;color:white;padding:3px",
  error: "background:red;color:white;padding:3px",
  info: "background:#B2CAD7;color:black;padding:3px",
  default: "",
};

const consoleLog = (msg, type) => {
  let result = msg;
  if (typeof msg === "object") {
    result = JSON.stringify(msg, null, " ");
  }
  console.log(`%c${result}`, logTypes[type]);
};

export const log = {
  success: (msg) => consoleLog(msg, "success"),
  warning: (msg) => consoleLog(msg, "warning"),
  error: (msg) => consoleLog(msg, "error"),
  info: (msg) => consoleLog(msg, "info"),
  log: (msg) => consoleLog(msg, "default"),
};
