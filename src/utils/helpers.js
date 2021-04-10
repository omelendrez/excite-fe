import moment from "moment";
import "moment/locale/es";

export const sortColumn = (a, b, fieldName) =>
  a[fieldName] < b[fieldName] ? -1 : a[fieldName] > b[fieldName] ? 1 : 0;

export const formatAmount = (value) =>
  value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
  });

export const formatDate = (date) => moment(date).format("L");
//export const formatDate = (date) => moment(date).add(-3, "hours").format("L");  // For local environment

export const createSelectList = (records, id, text) =>
  records
    .sort((a, b) => sortColumn(a, b, text))
    .map((record) => ({
      id: record[id],
      text: record[text],
    }));

export const statuses = [
  { id: "A", text: "ACTIVO" },
  { id: "I", text: "INACTIVO" },
];
