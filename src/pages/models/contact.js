import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    emai:{
        type:String,
        require:true
    },
    massage:{
        type:String,
        require:true
    }
})

const contact = mongoose.model("conatct",contactSchema)
export {contact}