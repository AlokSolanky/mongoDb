const mongodb = require("mongodb");
const getConnection = require("../util/database").getConnection;

const ObjectId = mongodb.ObjectId;
class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }
  save() {
    const db = getConnection();
    return db.collection("users").insertOne(this);
  }
  static findById(userId) {
    const db = getConnection();
    return db
      .collection("users")
      .find({ _id: new ObjectId(userId) })
      .next();
  }
}

module.exports = User;
