import dotenv from "dotenv";
import app from "./app.js";
import conntectToDataBase from "./config/database.js";

dotenv.config();

(async () => {
  await conntectToDataBase();
  app.listen(process.env.PORT, () => {
    console.log("Server is Running on port :", process.env.PORT);
  });
})();
