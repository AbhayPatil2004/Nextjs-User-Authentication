import mongoose from "mongoose";

export async function connect(){

    try{
       await mongoose.connect(process.env.MONGO_URL!)

        const connection = mongoose.connection;

        connection.on('connected' , () => {
            console.log("MongoDB Connected Succesfully")
          
        })

        connection.on('error' , () => {
            console.log("Error in connection")
            process.exit()
        })
    }
    catch(error){
        console.log("Something goes Wrong")
        console.log(error)
        throw new Error("Database connection failed");
    }
}