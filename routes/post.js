const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,  // this will give out the user id
    ref: "user"
  },
  title: String,
  description: String,
  image: String
  

});



module.exports = mongoose.model("post", postSchema);