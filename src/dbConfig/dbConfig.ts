import mongoose from "mongoose";

export default function connectDatabase(){

    try{
        mongoose.connect(process.env.MONGO_URL!)

        const connection = mongoose.connection;

        connection.on('connected' , () => {
            console.log("MongoDB Connected Succesfully")
            process.exit()
        })

        connection.on('error' , () => {
            console.log("Error in connection")
            process.exit()
        })
    }
    catch(error){
        console.log("Something goes Wrong")
        console.log(error)
    }
}