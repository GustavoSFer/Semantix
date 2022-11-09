const isValidEmail = (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(email);
};

const isValidPassword = (password, minLength = 0) => (password.length >= minLength);

const confirmPassword = (password, confirma) => (password === confirma);

const isValidName = (name, minLength = 1) => (name.length > minLength);

const isValidGroup = (grupo) => (grupo !== '' && grupo !== 'selecione');

const isValidCnpj = (cnpj, minLength = 18) => (cnpj.length === minLength);

export {
  isValidEmail,
  isValidPassword,
  isValidName,
  confirmPassword,
  isValidGroup,
  isValidCnpj,
};
