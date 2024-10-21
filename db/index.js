const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://jakemackbrown:SethTitus1@jakemackbrown.ntxtm.mongodb.net/bookClubDatabase?retryWrites=true&w=majority&appName=JakeMackBrown')
    .then(()=> {
        console.log('connected to MongoDB')
    })
    .catch((e) => {
        console.error('error!', e.message)
    })

const db = mongoose.connection

module.exports = db