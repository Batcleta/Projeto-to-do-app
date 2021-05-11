const MongoClient = require('mongoose')

module.exports = MongoClient.connect("mongodb://localhost:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });