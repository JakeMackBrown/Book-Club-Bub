const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { Category, Product } = require('./models')

// const categoryController = require('./controllers/categoryController');
// const productController = require('./controllers/productController');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());

(async () => {
    try {
        await connectDB();
    } catch (error) {
        console.error('Failed to connect to the database');
        process.exit(1); // Exit process if the DB connection fails
    }
})();

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('This is our landing page!'))