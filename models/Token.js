import mongoose from "mongoose";
 
const tokenSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.ObjectId,
        ref:'public',
        required:true,
    },
    token:{
        type:String,
        required:true,
    },
},{Timestamp:true});

const tokenModel = mongoose.model("public",tokenSchema)

export default mongoose.model("Token",tokenSchema)