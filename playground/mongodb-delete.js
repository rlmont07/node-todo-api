// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Uable to connect to MongoDB server:' + err);
  }
  console.log('Connected to MongoDB Server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result)
  // });

  // db.collection('Users').deleteMany({name: 'Randall Montgomery'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({_id: new ObjectID("5b540fa9b55b295e0f71dd23")}).then((result) => {
  //   console.log(result);
  // });

  //db.close();
});