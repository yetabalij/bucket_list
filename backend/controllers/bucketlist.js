const BucketList = require("./../models/bucketlist");

exports.getAllBuckets = async (req, res) => {
  try {
    const bucketlist = await BucketList.find();
    res.status(200).json({ bucketlist });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.postBucket = async (req, res) => {
  const bucketlist = req.body;
  try {
    await BucketList.create(bucketlist);
    res.status(200).json({ bucketlist });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.updateBukcet = async (req, res) => {
  const id = req.params.id;
  const bucketlist = req.body;
  try {
    await BucketList.findByIdAndUpdate(id, bucketlist, {
      useFindAndModify: false,
    });
    res.status(200).json("Record updated successfully.");
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};

exports.deleteBucket = async (req, res) => {
  const id = req.params.id;
  try {
    await BucketList.findByIdAndDelete(id);
    res.status(200).json("Record deleted successfully.");
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
