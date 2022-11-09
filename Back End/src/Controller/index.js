const service = require('../Service');

const login = async (req, res, next) => {
  const { email, password } = req.body
  const user = await service.login(email, password);
  if (user.code) return next(user)

  return res.status(200).json(user);
};

module.exports = {
  login,
}