"use client"

import axios from "axios"
import { useRouter } from "next/navigation"

export default function ProfilePage() {

    const router = useRouter();

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
        </div>

    )
}