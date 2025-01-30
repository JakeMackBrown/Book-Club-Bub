const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '')
  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' })
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded.id
    next()
  } catch (ex) {
    res.status(401).send({ error: 'Invalid token.' })
  }
}

module.exports = auth
