"use client"

import axios from "axios"
import { useRouter } from "next/navigation"
import Link from "next/link";
import { useState } from "react";

export default function ProfilePage() {

    const router = useRouter();

    const [ data , setData ] = useState("Nothing")

    const logOutUser = async () => {
        try {
            const response = await axios.get("/api/users/logout")
            console.log(response)
            router.push("/")
        }
        catch (error: any) {
            console.log(error)
        }
    }

    const getUserDetails = async () => {
        const data = await axios.get("/api/users/me")
        console.log(data)
        setData(data.data.data._id)
    }

    return (

        <div className="w-full h-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-6">
                Profile Page
            </h1>

            <button
                onClick={logOutUser}
                className="px-6 py-3 text-white rounded-lg shadow-md cursor-pointer"
            >
                Logout
            </button>

            <button
                onClick={getUserDetails}
                className="px-6 py-3 text-white rounded-lg shadow-md cursor-pointer"
            >
                {data === "Nothing" ? "getUserDetails" : data}
            </button>

            
        </div>

    )
}