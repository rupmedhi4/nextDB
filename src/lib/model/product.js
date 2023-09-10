import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  company: String,
  color: String,
  category: String
});

const product = mongoose.models.userdetails || mongoose.model("userdetails", productSchema);

export default product;
