const express = require("express");
const multer = require("multer");

const connect = require("./config/db");

const app = express();

app.use(express.json());

const userController = require("./controllers/user.controller")

app.use("/user", userController);

app.use("/users", userController);

app.set("view engine", "ejs");

app.listen(7658, async () => {
    await connect();
    console.log("listening to port 123456");
});