const mongoose = require('mongoose');
const config = require('./config/database');

module.exports = () => {
    //Database onError
    mongoose.connection.on('error', (error) => {
    console.error(`Database error: ${error}`);
    });

    //Database onConnection
    mongoose.connection.on('connected', () => {
    console.log(`Database connected`);
    });

    //Database Connection
    mongoose.connect(config.database, {useNewUrlParser: true})
}
