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

const bucketlist = model("BucketList", bucketListSchema);
