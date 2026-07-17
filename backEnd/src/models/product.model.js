import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String },
    slug: { type: String, unique: true },
    price: { type: Number },
    oldPrice: { type: Number },
    discount: { type: Number, default: 0 },
    stock: { type: Number },
    brand: { type: String },
    category: { type: String },
    category_fa: { type: String },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    bestSeller: { type: Boolean, default: false },
    isProductNew: { type: Boolean, default: true },
    image: { type: String },
    colors: [String],
    description: { type: String },
    specifications: [{ title: String, value: String }],
  },
  { timestamps: true },
);

const Product = mongoose.model("product", productSchema);
export default Product;
