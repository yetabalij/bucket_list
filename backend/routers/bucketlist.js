const express = require("express");
const {
  getAllBuckets,
  postBucket,
  updateBukcet,
  deleteBucket,
} = require("./../controllers/bucketlist");

const route = express.Router();

route.get("/getallbucketlist", getAllBuckets);
route.post("/postbucketlist", postBucket);
route.put("/updatebucketlist/:id", updateBukcet);
route.delete("/deletebucketlist/:id", deleteBucket);

module.exports = route;
