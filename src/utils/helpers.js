export const handleError = error => {
  if (error.response && error.response.data && error.response.data.error && error.response.data.error.code === 'ER_DUP_ENTRY') {
    return { message: 'Registro duplicado' };
  }
  if (error.response && error.response.data && error.response.data.message) {
    return error.response.data;
  }
  if (error.response.data) {
    if (error.response.data.error && error.response.data.error.sqlMessage) {
      return ({ message: error.response.data.error.sqlMessage });
    }
  }
  return ({ message: 'Error interno del servidor' });
};

export const sortColumn = (a, b, fieldName) => (a[fieldName] < b[fieldName]) ? -1 : (a[fieldName] > b[fieldName]) ? 1 : 0;