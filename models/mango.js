const mongoose = require("mongoose")
const mangoSchema = mongoose.Schema({
Type : String,
color: String,
price: Number
})
module.exports = mongoose.model("mango", mangoSchema)