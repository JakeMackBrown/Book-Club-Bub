const Discussion = require('../models/discussion')

const getAllDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find()
    res.json(discussions)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getDiscussionById = async (req, res) => {
  try {
    const { id } = req.params
    const discussion = await Discussion.findById(id)
    if (discussion) {
      return res.json(discussion)
    }
    return res.status(404).send('Discussion with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createDiscussion = async (req, res) => {
  try {
    const discussion = new Discussion(req.body)
    await discussion.save()
    return res.status(201).json({ discussion })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateDiscussion = async (req, res) => {
  try {
    const { id } = req.params
    const discussion = await Discussion.findByIdAndUpdate(id, req.body, { new: true })
    if (discussion) {
      return res.status(200).json(discussion)
    }
    throw new Error('Discussion not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteDiscussion = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Discussion.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Discussion deleted')
    }
    throw new Error('Discussion not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllDiscussions,
  getDiscussionById,
  createDiscussion,
  updateDiscussion,
  deleteDiscussion
}