const statusCodeError = (msg) => {
  switch (msg) {
    case 'string.base':
      return 422;
    case 'string.min':
      return 422;
    case 'string.max':
      return 422;
    default:
      return 400;
  }
};

module.exports = statusCodeError;