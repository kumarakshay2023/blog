const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    heading:String,
    image:String,
    content:String,
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    
    },
    hashtag:String,
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('post',postSchema);