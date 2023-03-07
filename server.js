const express = require("express");
const app = express();
const indexRouters = require("./routers/index.router");


app.use("/", indexRouters);

app.listen("3000");