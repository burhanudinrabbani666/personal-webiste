const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");

// import path
const guestRoutes = require("./routes/guest");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(guestRoutes);

app.listen(3002);
