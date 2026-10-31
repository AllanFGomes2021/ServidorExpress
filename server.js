require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const routes = require("./routes");
const mongoose = require("mongoose");
mongoose
  .connect(process.env.connectionSTRING)
  .then(() => {
    console.log("conectei a base de dados");
    app.emit("pronto");
  })
  .catch((e) => console.log(e));

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.use(routes);

app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000");
    console.log("Servidor executando na porta 3000");
  });
});
