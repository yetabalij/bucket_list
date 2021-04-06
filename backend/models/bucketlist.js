const mongoose = require("mongoose");

const bucketListSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("BucketList", bucketListSchema);
