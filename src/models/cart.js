import mongoose from "mongoose"

const cartSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    quantity:{  
        type:Number,
        required:true,
        default: 1

    },
    total:{
        type:Number,
        required:true
    },
    totalOrder:{
        type:Number,
        required:true
    }
})

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export { Cart };
