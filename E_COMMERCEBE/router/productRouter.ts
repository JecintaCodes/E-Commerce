import {Router} from "express"
import { createProduct, readAllProduct, readProduct } from "../controller/product";

const productRouter = Router();

productRouter.route("/create").post(createProduct)
productRouter.route("/read").get(readAllProduct)
productRouter.route("/productID/read-one").get(readProduct)

export default productRouter