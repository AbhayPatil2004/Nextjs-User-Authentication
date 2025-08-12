"use client"

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

export default function SignUpPage(){

    const [ user , setUser ] = useState({
        username : "" ,
        email : "",
        password :""
    })
    
    const onSignup = async () => {

    }
     

    return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        
        <hr />
        <label htmlFor="username">username</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="username"
            type="text"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="username"
            />
        <label htmlFor="email">email</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="email"
            type="text"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"
            />
        <label htmlFor="password">password</label>
        <input 
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"
            />
            <button
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600">Sign Up Here</button>
            <Link href="/login">Visit login page</Link>
        </div>
    )
}