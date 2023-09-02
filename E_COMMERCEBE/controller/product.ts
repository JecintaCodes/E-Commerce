import express, {Request,Response} from "express"
import ProductModel from "../model/ProductModel";


export const createProduct = async(req:Request,res:Response)=>{
    try {
        const {title, cost, total, img } = req.body;

        const product = await ProductModel.create({
            title,
            cost,
            img,
            total
        })
        
        return res.status(201).json({
            message:" created",
            data: product
         })
    } catch (error) {
     return res.status(404).json({
        message:"can't create",
        data: error.message
     })  
    }
}

export const readAllProduct = async(req:Request,res:Response)=>{
    try {
        const product = await ProductModel.find()
     
        return res.status(200).json({
            message:" gotten products",
            data: product
         })
    } catch (error) {
     return res.status(404).json({
        message:"can't create",
        data: Error
     })  
    }
}

export const readProduct = async(req:Request,res:Response)=>{
    try {
        const {productID} = req.params;

        const product = await ProductModel.findById(productID)

        return res.status(200).json({
            message:" gotten product",
            data: product
         })
    } catch (error) {
     return res.status(404).json({
        message:"can't get",
        data: Error
     })  
    }
}

