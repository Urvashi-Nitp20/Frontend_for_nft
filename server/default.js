import { products } from "./const/data.js"
import Product from "./sigma/product-schema.js";
const DefaultData=async()=>{
    
        try {
           
           await Product.insertMany(products);
            console.log("Data inserted successfully");
            
        } catch (error) {
            console.log(`error while inserting defaultdata ${error}`);
        }
    
}

export default DefaultData