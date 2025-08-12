import mongoose from "mongoose";

const userSchema = mongoose.Schema({

    username : {
        type : String ,
        required : [ true , "Please privide a Username"] ,
        unique : true 
    },
    email:{
        type : String ,
        required : [ true , "Email is requried"],
        unique : true 
    },
    password:{
        type : String ,
        required : [ true , "Password is requried"],
    },
    isVerified:{
        type : Boolean ,
        default : false 
    },
    idAdmin : {
        type : Boolean ,
        default : false 
    },

    forgotPasswordToken : String ,
    forgotPasswordTokenExpiry : String ,
    verifyToken : String ,
    verifyTokenExpiry : String ,
})

const User = mongoose.models.users || mongoose.model("users" , userSchema );

export default User ;