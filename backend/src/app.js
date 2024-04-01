const express = require("express");
const cors = require("cors");
const login = require("./routes/router.login");
const form = require("./routes/router.form");
const app = express();
  
app.use(cors());

app.use(express.json());


app.use("/login", login);
app.use("/form", form);



module.exports = app;