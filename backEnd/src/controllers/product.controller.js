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

const getAllCategories = async (req, res) => {
  const data = await Product.find();
  const categories = Object.groupBy(data , item => item.category_fa)
  const brands = Object.groupBy(data , item => item.brand)
  res.status(200).json({categories , brands})
}
const filterProducts = async (req, res)=> {
  const {category , brand , minPrice , maxPrice} = req.body;
  const filter = {}  
  if(category.length){
    filter.category_fa = { $in : category};
  }
  if(brand.length){
    filter.brand = {$in : brand};
  }
  if(minPrice || maxPrice){
    filter.price = {}
  }
  if(minPrice){
    filter.price.$gte = minPrice
  }
  if(maxPrice){
    filter.price.$lte = maxPrice;
  }  
  console.log(filter);
  
  const data = await Product.find(filter)
  res.status(200).json(data)
}

const getSortedItems = async (req, res) => {
    const {sort} = req.body;    
    let data = null;
    switch(sort){
      case 'favourite':
        data = await await Product.find().sort({rating: -1})        
        res.status(200).json(data)
        break;
      case 'cheap':
        data = await await Product.find().sort({price: 1})        
        res.status(200).json(data)
        break;
      case 'expensive':
        data = await await Product.find().sort({price: -1})        
        res.status(200).json(data)
        break;
      case 'newest':
        data = await await Product.find().sort({createdAt: -1})
        res.status(200).json(data)
        break;
    }
  }
export { takeAllProducts, registerNewProduct, sendProductDetail , getAllCategories , filterProducts , getSortedItems};
