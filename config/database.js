const mongoose = require('mongoose')

const setUpDB = () => {
    mongoose.connect('mongodb://localhost:27017/twitter', {  useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
        .then(res => console.log('connected to the db'))
        .catch(err => console.log(err))
}

module.exports = setUpDB