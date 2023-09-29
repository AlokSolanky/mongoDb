const mongodb = require("mongodb");

const MgClient = mongodb.MongoClient;

let _db;
const connectDb = (callback) => {
  MgClient.connect(
    "mongodb+srv://aloksolanky1:Xw7EphB7b7A4HWcb@cluster0.fwlt2yt.mongodb.net/expenseDb?retryWrites=true&w=majority"
  )
    .then((client) => {
      // callback();
      _db = client.db();
      callback();
      console.log("connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

const getConnection = () => {
  if (_db) {
    return _db;
  }
  throw new Error("No Database found");
};

// exports = { connectDb, getConnection };
exports.connectDb = connectDb;
exports.getConnection = getConnection;
// module.exports = connectDb;
// module.exports = getConnection;
