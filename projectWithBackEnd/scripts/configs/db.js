const mongoose = require("mongoose");

const connect = () => {
    return mongoose.connect("mongodb+srv://ashu:Ashu_1@cluster0.l0flr.mongodb.net/dunzo");
};

module.exports = connect;