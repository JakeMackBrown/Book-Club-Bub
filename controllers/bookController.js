const { Book } = require('../models')

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.json(books)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBookById = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findById(id)
    if (book) {
      return res.json(book)
    }
    return res.status(404).send('Book with the specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createBook = async (req, res) => {
  try {
    const book = await new Book(req.body)
    await book.save()
    return res.status(201).json({ book })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const updateBook = async (req, res) => {
  try {
    const { id } = req.params
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true })
    if (book) {
      return res.status(200).json(book)
    }
    throw new Error('Book not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Book.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Book deleted')
    }
    throw new Error('Book not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook
}