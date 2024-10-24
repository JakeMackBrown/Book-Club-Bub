document.getElementById('books-btn').addEventListener('click', () => {
    window.location.href = './books.html';
  });
  
document.getElementById('meetings-btn').addEventListener('click', () => {
    window.location.href = './meetings.html';
  });

document.getElementById('sign-in-btn').addEventListener('click', () => {
    window.location.href = './sign-in.html';
  });
  
document.getElementById('register-btn').addEventListener('click', () => {
    window.location.href = './register.html';
  });

document.getElementById('dashboard-btn').addEventListener('click', () => {
    window.location.href = './dashboard.html';
  });
  
document.querySelector('nav button').addEventListener('click', () => {
    window.location.href = './dashboard.html';
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