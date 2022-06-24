const mongoose = require('mongoose');
const { Schema } = mongoose;

const Page = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },
    slug: {
      type: String,
      required: true,
    },
    Background_URL: {
      type: String,
      required: false,
    },
    
    content: Object,
  },
  {
    timestamps: true,
  },
);

module.exports= mongoose.model('Pages', Page);
