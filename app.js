const path = require("path");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const connectDb = require("./util/database").connectDb;
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
// app.get("/", (req, res) => {
//   res.send("working");
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);
connectDb(() => {
  // console.log(client);
  app.listen(3000, () => {
    console.log("server listening at 3000");
  });
});
