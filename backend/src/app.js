const express = require("express");
const cors = require("cors");
const login = require("./routes/router.login");
const calc_form = require("./routes/router.calc_form");
const save_form = require("./routes/router.save_form");
const app = express();
  
app.use(cors());

app.use(express.json());


app.use("/login", login);
app.use("/form", calc_form);
app.use("/form", save_form);



module.exports = app;