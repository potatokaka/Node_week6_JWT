const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: [true, "貼文 ID 未填寫"]
      },
      image: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        required: [true, "內容必填"]
      },
      likes: {
        type: Number,
        default: 0
      },
      createdAt: {
        type: Date,
        default: Date.now,
        select: false
      },
      // comments: {
      //   type: Number,
      //   default: 0
      // },
      // type: {
      //   type: String,
      //   enum: ['group', 'person', 'fan'],
      //   required: [true, '貼文種類必填']
      // },
      // tags: {
      //   type: String,
      //   required: [true, '貼文標籤必填']
      // }
    },
    {
      versionKey: false
    }
  )
  
  const Post = mongoose.model('posts', postSchema);
  
  module.exports = Post;