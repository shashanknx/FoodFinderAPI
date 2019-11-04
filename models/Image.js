const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  data: Buffer,
  contentType: String
});

module.exports = mongoose.model("Images", ImageSchema);
