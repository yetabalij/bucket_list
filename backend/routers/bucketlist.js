const express = require("express");
const { getAllBuckets } = require("./../controllers/bucketlist");

const route = express.Router();

route.get("/", getAllBuckets);

module.exports = route;
