const addBookButton = document.querySelector('.addBookButton')
const addBookForm = document.querySelector('.addBookForm')
const scheduleMeetingButton = document.querySelector('.scheduleMeetingButton')
const scheduleMeetingForm = document.querySelector('.scheduleMeetingForm')

addBookButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const genre = document.getElementById('genre').value

    const data = {
        title: title,
        author: author,
        genre: genre
    }

    const res = await axios.post('http://localhost:3001/books', data)
    console.log(res)
})

scheduleMeetingButton.addEventListener('click', async (e) => {
    e.preventDefault()
    const date = document.getElementById('date').value
    const location = document.getElementById('location').value
    const bookId = document.getElementById('bookId').value

    const data = {
        date: date,
        location: location,
        book_id: bookId
    }
    console.log(data)
    const res = await axios.post('http://localhost:3001/meetings', data)
    console.log(res)
})

// scheduleMeetingButton.addEventListener('click', async (e) => {
//     e.preventDefault()
//     const date = document.getElementById('date').value
//     const location = document.getElementById('location').value
//     const bookId = document.getElementById('bookId').value

//     const data = {
//         date: date,
//         location: location,
//         book_id: bookId
//     }
//     console.log(data)
//     const res = await axios.get('http://localhost:3001/meetings')
//     console.log(res)
// })