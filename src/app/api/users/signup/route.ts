import { connect } from "@/dbConfig/dbConfig"
import { NextResponse, NextRequest } from "next/server"
import User from "@/models/userModel"
import bcrypt from "bcryptjs"

connect();

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json();

        const { username, email, password } = reqBody;

        console.log(username)

        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json(
                { error: "User already Exits" },
                { status: 400 }
            )
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        return NextResponse.json(
            { message: "User created successfully", userId: savedUser._id },
            { status: 201 }
        );
    }
    catch (error: any) {
        console.log(error)
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}