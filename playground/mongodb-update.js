// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to MongoDB server:' + err);
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b54fa26df9b237269e66182")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b53e50fcf426654ec602b29")
  }, {
    $set: {
      name: 'Randall Montgomery'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result)=> {
    console.log(result);
  });

  //db.close();
});