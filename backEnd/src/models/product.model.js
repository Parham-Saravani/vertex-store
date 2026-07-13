import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    slug: { type: String },
    price: { type: Number },
    oldPrice: { type: Number },
    discount: { type: Number },
    stock: { type: Number },
    brand: { type: String },
    category: { type: String },
    rating: { type: Number },
    reviewCount: { type: Number },
    featured: { type: Boolean },
    bestSeller: { type: Boolean },
    isProductNew: { type: Boolean },
    images: { type: Array },
    colors: { type: Array },
    description: { type: String },
    specifications: { type: Array },
  },
  { timestamps: true },
);

const Product = mongoose.model("product", productSchema);
export default Product;
