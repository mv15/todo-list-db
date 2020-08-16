// require mongoose
const mongoose = require('mongoose');

// connection to mongoose
mongoose.connect('mongodb://localhost/todo_db', { useNewUrlParser: true, useUnifiedTopology: true });

// check if connection established or not

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to mongodb"));

db.once('open', function() {
    console.log('connected to database successful');
});

module.exports = db;