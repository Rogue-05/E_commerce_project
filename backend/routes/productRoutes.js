import express from 'express';
import { product } from '../modals/productModal.js';


const route=express.Router();

route.get('/', async (req, res) => {
    try {
      const products = await product.find({}); // Await the asynchronous call
      return res.status(200).json({
        count: products.length,
        data: products
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
route.get('/:id',async (req,res)=>{
    try {
      const {id}=req.params;
      const prod= await product.findById(id);
      if (!prod){
        return res.status(200).json({message:"Product Doesnt exist"});
      }
      return res.status(200).json(prod);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  })
export default route;