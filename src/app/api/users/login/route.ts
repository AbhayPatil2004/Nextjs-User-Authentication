import { connect } from "@/dbConfig/dbConfig"
import { NextResponse, NextRequest } from "next/server"
import User from "@/models/userModel"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {

    try {

        const reqBody = await request.json()

        const { email, password } = reqBody;

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { error: "User not Exits With this email" },
                { status: 400 }
            )
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 })
        }
        console.log(user);

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email

        }

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET! , {expiresIn: "1d"})

        const response = NextResponse.json(
            {
                message: "Login successful",
                success: true,
            }
        )

        response.cookies.set("token", token, {
            httpOnly: true, 
            
        })
        console.log(response)
        return response;
    }
    catch(error:any){
        return NextResponse.json({error: error.message}, {status: 500})
    }

}