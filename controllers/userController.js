const { User } = require('../models')
const jwt = require('jsonwebtoken')

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.json(user)
    }
    return res.status(404).send('User with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    return res.status(201).json({ user })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, req.body, { new: true })
    if (user) {
      return res.status(200).json(user)
    }
    throw new Error('User not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await User.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('User deleted')
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = new User({ name, email, password })
    await user.save()
    res.status(201).json({ message: 'User registered successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }
    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' })
    res.json({ token })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const updateUserProfile = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const user = await User.findById(req.user)
    if (name) user.name = name
    if (email) user.email = email
    if (password) user.password = password
    await user.save()
    res.status(200).json({ message: 'Profile updated successfully' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  registerUser,
  loginUser,
  updateUserProfile
}
