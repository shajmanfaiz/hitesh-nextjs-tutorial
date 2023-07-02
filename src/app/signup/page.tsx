"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from 'next/navigation'
import { axios } from "axios"
import signup from "../api/users/signup/route"

export default function SignUpPage (){
    const [user,setUser] = React.useState({
        email : "",
        password : "",
        username : "",
    })
     const onSignup = async () => {

     }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-black text-2xl">Sign Up</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" type="text" id="username" value={user.username} onChange={(e) => setUser({...user,username:e.target.value})} placeholder="Username" />

            <label htmlFor="email">Email</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" type="email" id="email" value={user.email} onChange={(e) => setUser({...user,email:e.target.value})} placeholder="Email" />
            
            <label htmlFor="password">Password</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black" type="password" id="password" value={user.password} onChange={(e) => setUser({...user,password:e.target.value})} placeholder="Password"/>

            <button onClick={onSignup} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
            focus:border-gray-600">Sign Up</button>
            <Link href="/login">Visit Login</Link>
        </div>
    )
}