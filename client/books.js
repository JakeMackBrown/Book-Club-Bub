async function showData (){
  try {
  const response = await axios.get('http://localhost:3001/books')
  console.log(response)
  const booksContainer = document.getElementById('books-container')
  response.data.forEach(book => {
    const bookItem = document.createElement('div')
    bookItem.textContent = `${book.title} by ${book.author}, Genre: ${book.genre}`
    booksContainer.appendChild(bookItem)
  })


} catch (error) {
  console.error('Error fetching books:', error);
}}

showData()