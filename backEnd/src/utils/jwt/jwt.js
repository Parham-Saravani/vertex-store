import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";
const generateJWT = async (user) => {
  console.log(user);
  
  return await jwt.sign({ id: user._id}, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
export default generateJWT;
