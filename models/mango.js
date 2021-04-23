const mongoose = require("mongoose")
const mangoSchema = mongoose.Schema({
Type : {
    type:String,
    required: [true,"it is requried for the mango"],
},
color: String,
price: {
    type: Number,
    min:[100,"Price of the mangoes should be 50"],
    max:[1000,"Price cannot be more than 50"]
},
})
module.exports = mongoose.model("mango", mangoSchema)