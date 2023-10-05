const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
// const connectDb = require("./util/database").connectDb;
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// const User = require("./models/user");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use((req, res, next) => {
//   User.findById("6518eb43a9070d3529817516").then((user) => {
//     console.log("USER IS :", user);
//     req.user = new User(user.name, user.email, user.cart, user._id);
//     next();
//   });
// });
app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://aloksolanky1:Xw7EphB7b7A4HWcb@cluster0.fwlt2yt.mongodb.net/store"
  )
  .then((result) => {
    console.log("connected");
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
