const express = require("express");
const app = express();
const Router = require("./usersRouter");
const bcrypt = require("bcrypt");
const fs = require("fs");
app.use(express.json());
app.use("/user", Router);
app.post("/signup", (req, res) => {
  const body = req.body;
  const { name, password } = body;
  const hashPass = bcrypt.hashSync(password, 10);

  const user = {
    name,
    password: hashPass,
  };
  // const data = fs.readFileSync("./index.js", "utf-8");
  // const objectData = JSON.parse(data);
  // objectData.push(body);
  fs.writeFileSync("./index.js", JSON.stringify(user), (error) => {
    if (error) console.log(error);
  });
  res.send("amjilttai");
});
app.listen(8080, console.log("Server is running"));
