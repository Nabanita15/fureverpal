import mongoose from "mongoose";

const userSchema= await mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})
const User = mongoose.models.User || mongoose.model("User", userSchema);
export {User}