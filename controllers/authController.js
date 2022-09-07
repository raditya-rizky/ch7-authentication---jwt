const { User } = require("../models");

module.exports = {
  register: async (req, res) => {
    try {
      const user = await User.register(req.body);
      res.json(user);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  login: async (req, res) => {
    const user = await User.authenticate(req.body);
    const { id, username } = user;
    res.json({ id, username, accessToken: user.generateToken() });
  },

  whoami: (req, res) => {
    const currentUser = req.user;
    res.json(currentUser);
  },
};
