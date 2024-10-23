document.getElementById('books-btn').addEventListener('click', () => {
    window.location.href = '/books.html';
  });
  
  document.getElementById('meetings-btn').addEventListener('click', () => {
    window.location.href = '/meetings.html';
  });

const addBookButton = document.querySelector('.addBookButton');
const addBookForm = document.querySelector('.addBookForm');
const scheduleMeetingButton = document.querySelector('.scheduleMeetingButton');
const scheduleMeetingForm = document.querySelector('.scheduleMeetingForm');

// Event listener for adding a book
addBookButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const data = { title, author, genre };
  const res = await axios.post('http://localhost:3001/books', data);
  console.log(res);
  addBookForm.reset(); // Clear form after submission
  location.reload(); // Reload the page after adding a book
});

// Event listener for scheduling a meeting
scheduleMeetingButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const date = document.getElementById('date').value;
  const location = document.getElementById('location').value;
  const bookId = document.getElementById('bookId').value;
  const data = { date, location, book_id: bookId };
  const res = await axios.post('http://localhost:3001/meetings', data);
  console.log(res);
  scheduleMeetingForm.reset(); // Clear form after submission
  location.reload(); // Reload the page after scheduling a meeting
});

// Fetch and display books data in books.html
window.addEventListener('load', async () => {
  if (window.location.pathname === '/books.html') {
    try {
      const response = await axios.get('http://localhost:3001/api/books');
      console.log(response.data); // Log the books data from the server
      const booksContainer = document.getElementById('books-container');
      response.data.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.textContent = `${book.title} by ${book.author}, Genre: ${book.genre}`;
        booksContainer.appendChild(bookItem);
      });
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }
});

// Fetch and display meetings data in meetings.html
window.addEventListener('load', async () => {
  if (window.location.pathname === '/meetings.html') {
    try {
      const response = await axios.get('http://localhost:3001/api/meetings');
      console.log(response.data); // Log the meetings data from the server
      const meetingsContainer = document.getElementById('meetings-container');
      response.data.forEach(meeting => {
        const meetingItem = document.createElement('div');
        meetingItem.textContent = `Meeting on ${meeting.date} at ${meeting.location}, Book ID: ${meeting.book_id}`;
        meetingsContainer.appendChild(meetingItem);
      });
    } catch (error) {
      console.error('Error fetching meetings:', error);
    }
  }
});