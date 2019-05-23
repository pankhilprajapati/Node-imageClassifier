const mongoose = require("mongoose")

const imgSchema = new mongoose.Schema({
    image :{
        type: String
    },
    k : Number

})


module.exports = mongoose.model("img", imgSchema)