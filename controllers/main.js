const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

// const login = async (req, res) => {
//   try {
//     const { username, password } = req.body

//     if (!username || !password) {
//       throw new CustomAPIError('Please provide email and password', 400)
//     }

//     // Generate a simple 'id' for demo purposes
//     const id = new Date().getDate()

//     console.log('JWT Secret:', process.env.JWT_SECRET)
//     // Generate a JWT token
//     const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
//       expiresIn: '30d',
//     })

//     console.log('Generated token:', token)

//     res.status(200).json({ msg: 'user created', token })
//   } catch (error) {
//     console.error('Error:', error)
//     res
//       .status(error.statusCode || 500)
//       .json({ error: error.message || 'Something went wrong' })
//   }
// }

const login = async (req, res) => {
  const { username, password } = req.body

  // if 2 values are not provided- username and password, there are 3 ways to handle it
  // 1. mongoose validation - we use this in task manager (the models schema and required true)
  // 2. Joi - npm
  // 3. check in the controller - we used this in this project - cutom errors

  if (!username || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  //  since we are not connected to the DB, we are creating this from the scratch
  const id = new Date().getDate()

  // token
  // this for demo, in a real app, u use long, complex string value
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })

  res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
  // console.log(req.user); // from the middleware

  const luckyNumber = Math.floor(Math.random() * 100)

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized number: ${luckyNumber}`,
  })
}

module.exports = {
  login,
  dashboard,
}
