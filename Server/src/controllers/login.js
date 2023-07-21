const users = require("../utils/users.js");

const login = (req, res) => {
  const { email, password } = req.query;

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  foundUser
    ? res.status(200).json({ access: true })
    : res.status(200).json({ access: false });
};

module.exports=login;