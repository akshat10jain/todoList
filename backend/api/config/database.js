const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const key=require('./keys')
var uri = key.mongoURI;
mongoose.connect(uri, function(err, res) {
    if (err) {
        console.log('Error connecting to MongoDB.')
    } else {
        console.log('No errors connecting to MongoDB.')
    }
});

var mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error'));
mongoDB.once('open', function() {
    console.log('Connected to MongoDB database.');
})

module.exports = mongoDB;