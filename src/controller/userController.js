const User = require('../model/user')
const jwt = require('jsonwebtoken')

exports.post = async (req, res, next) => {

  await User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
  })
    .then(response => {
      res.status(201).send({
        status: 201,
        message: 'User successfully saved!'
      })
    })
    .catch(e => {
      res.status(e.status || 500).json({
        status: e.status || 500,
        error: {
          message: e.message || serverErrorMsg,
        }
      })
    })

}

exports.get = async (req, res, next) => {
  await User.findAll()
    .then(response => {
      res.status(200).send(response)
    })
    .catch(e => {
      res.status(e.status || 500).send(e.message)
    })
}

exports.login = (req, res, next) => {
  if (req.body.username === 'marcosmitozo' && req.body.password === 's8wck9') {
    const id = req.body.id
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 3600
    })

    res.status(200).send({ auth: true, token })
  }

  res.status(500).send('Invalid username or password.')
}

exports.logout = (req, res, next) => {
  res.status(200).send({ auth: false, token: null });
}