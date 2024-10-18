const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://jakemackbrown:SethTitus1@jakemackbrown.ntxtm.mongodb.net/booksDatabase?retryWrites=true&w=majority&appName=JakeMackBrown');
        console.log('Successfully connected to MongoDB.');
    } catch (e) {
        console.error('Database connection error:', e.message);
        throw e;
    }
};

mongoose.set('debug', true);

module.exports = { connectDB };