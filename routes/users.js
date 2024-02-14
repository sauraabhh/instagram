const mongoose = require("mongoose");
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/clone");

const userSchema = mongoose.Schema({
  username : String,
  name :String,
  email : String,
  bio : String,
  password : String,
  profileImage : String,
  posts : [{type : mongoose.Schema.Types.ObjectId , ref : "post"}],
  stories : [{type : mongoose.Schema.Types.ObjectId , ref : "story"}],
  saved : [{type : mongoose.Schema.Types.ObjectId , ref : "post"}],
  followers : {
    type : Array,
    default : []
  },
  followings : {
    type : Array,
    default : []
  }
})

userSchema.plugin(plm);

module.exports = mongoose.model("user", userSchema);