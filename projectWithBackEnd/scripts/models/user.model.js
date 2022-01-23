const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        user_name: {type: String},
        address: {type: String},
        mobile_no: {type: Number, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const User = mongoose.model("user", userSchema);

module.exports = User;