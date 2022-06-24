const mongoose = require('mongoose');
const { Schema } = mongoose;

const Template = new mongoose.Schema(
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
    content: Object,
  },
  {
    timestamps: true,
  },
);

module.exports= mongoose.model('Templates', Template);
