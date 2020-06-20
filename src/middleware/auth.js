const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token);

    const decoded = jwt.verify(token, 'test string');
    console.log(decoded);

    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if(!user) {
        throw new Error();
    }

    req.user = user;

    next();
  } catch (err) {
    res
      .status(401)
      .send({ error: 'you are are not authorized to access this route' });
  }

};

module.exports = auth;