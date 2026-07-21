import Product from "../models/product.model.js";
import createSlug from "../utils/slugGenerator/slugGenerator.js";
const registerNewProduct = async (req, res) => {
  const {title,price,stock,brand,category,category_fa,image,colors,description,specifications} = req.body;
  if (title &&typeof price === "number" &&price > 0 &&stock &&brand &&category && category_fa &&image &&colors.length &&description &&specifications.length) {
    try {
      await Product.create({title,slug: createSlug(title),price,stock,brand,category,category_fa,image,colors,description,specifications});
      res.status(201).json({ message: "PRODUCT_CREAETD" });
    } catch (error) {
      console.log(error);
      res.status(400).json("PRODUCT_NOT_CREATED");
    }
  }
};
const takeAllProducts = async (req, res) => {
  const data = await Product.find();
  res.status(200).json(data);
};
const sendProductDetail = async (req, res) => {
  const productID = req.params.id;
  const product = await Product.findOne({ _id: productID });
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(200).json({ message: "PRODUCT_NOT_FOUND" });
  }
};
export { takeAllProducts, registerNewProduct, sendProductDetail };
