const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  picture : String,
  user : {
    type : mongoose.Schema.Types.ObjectId,
    ref  :"user"
  },
  date:{
    type : Date,
    default : Date.now
  },
  likes :[{
    type : mongoose.Schema.Types.ObjectId,
    ref : "user",
  }],
  caption : String,
  // Comments array []
  comment : {
    type : Array,
    default : [],
  }
});

module.exports = mongoose.model("post", postSchema);