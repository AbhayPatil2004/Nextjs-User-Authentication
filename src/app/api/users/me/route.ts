import { NextRequest , NextResponse } from "next/server";
import { getUserData} from "@/helpers/getDatafromToken"
import {connect } from "@/dbConfig/dbConfig"
import User from "@/models/userModel"

connect()

export async function GET( request : NextRequest ){

    try{
        const data = await getUserData(request);
        const user = await User.findOne({ _id : data.id}).select("-password")

        return NextResponse.json(
            {
                message : "User found Succesfully",
                data : user
            }
        )
    }
    catch(error:any){
        return NextResponse.json({
            message : "User not found",
            success : false ,
            status : 400 
        })
    }
}