const MongoClient = require('mongoose')
MongoClient.Promise = global.Promise

module.exports = MongoClient.connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});