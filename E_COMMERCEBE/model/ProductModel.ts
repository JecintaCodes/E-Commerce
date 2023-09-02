import mongoose from "mongoose";


interface iProduct{
    img: string,
    total: string,
    cost: String,
    title: string
}




interface iProductData extends iProduct, mongoose.Document{}
    const productModel = new mongoose.Schema<iProduct>({    
        img:{
            type: String
        },
        total:{
            type: String
        },
        cost:{
            type: String
        },
        title:{
            type: String
        },
    },
    {timestamps:true}
    )
export default mongoose.model<iProductData>("products", productModel)