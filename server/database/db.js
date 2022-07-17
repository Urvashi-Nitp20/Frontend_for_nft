import mongoose from "mongoose";


export const Connection= async(username, password)=>{
    const URL=`mongodb+srv://${username}:${password}@ecommerce.gk2tbhn.mongodb.net/?retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser :true})
       console.log("Our connection is set successfully");
        
    } catch (error) {
        console.log(`Error while connecting with database ${error}`);
    }
}