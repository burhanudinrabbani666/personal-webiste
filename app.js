const express = require("express");
const bodyParser = require("body-parser");

// import path
const guestRoutes = require("./routes/guest");
const adminRoutes = require("./routes/admin");
const { getErrorMessage } = require("./controller/404");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/admin", adminRoutes);
app.use(guestRoutes);

app.use("/", getErrorMessage);

app.listen(3002);
