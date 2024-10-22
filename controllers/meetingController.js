const { Meeting } = require('../models')

const getAllMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().populate("book_id")
    res.json(meetings)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getMeetingById = async (req, res) => {
  try {
    const { id } = req.params
    const meeting = await Meeting.findById(id).populate("book_id")
    if (meeting) {
      return res.json(meeting)
    }
    return res.status(404).send('Meeting with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createMeeting = async (req, res) => {
  try {
    console.log(req.body)
    const meeting = new Meeting(req.body)
    await meeting.save()
    return res.status(201).json({ meeting })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateMeeting = async (req, res) => {
  try {
    const { id } = req.params
    const meeting = await Meeting.findByIdAndUpdate(id, req.body, { new: true })
    if (meeting) {
      return res.status(200).json(meeting)
    }
    throw new Error('Meeting not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteMeeting = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Meeting.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Meeting deleted')
    }
    throw new Error('Meeting not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllMeetings,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting
}