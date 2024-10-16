import mongoose from 'mongoose'
const adminSchema = mongoose.Schema({
    name:{
        type:String,
         required:true,
         trim: true,
    
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    mobile:{
        type:Number,
        required:true,



    },
    
    password:{
        type: String,
        required:true},

  
        role:{
            type:String,
            required:true
        }

        
    
},{Timestamps:true});


const adminModel = mongoose.model("users",adminSchema)

export default adminModel