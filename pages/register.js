import React from 'react'
import Navbar from './components/Navbar'

export default function Register() {
  return (
    <div className="flex flex-col justify-center">
        <div className="py-4 px-9 my-20 w-full sm:w-3/4 lg:w-2/4 max-w-5xlg border border-solid rounded-2xl flex flex-col self-center items-center">
            <h1 className="text-center my-8 text-4xl select-none font-bold">Register</h1>        
            <div className="mb-3 flex flex-col w-full md:w-3/4 lg:w-5/8 self-center">
                <label className="px-3" name="email">E-Mail</label>
                <input className="border border-solid rounded-xl border-gray-400 p-3" type="text" placeholder="Email" name="email"></input>
            </div>
            <div className="mb-3 flex flex-col w-full md:w-3/4 lg:w-5/8 self-center">
                <label className="px-3" name="password" type="password">Password</label>
                <input className="border border-solid rounded-xl border-gray-400 p-3" type="text" placeholder="Password" name="password"></input>
            </div>
            <button className="mt-3 bg-sky-500 text-sky-100 font-bold border duration-300 hover:bg-sky-700 rounded-xl w-2/4 h-12 self-center">Create Account</button>
            <a href="./login">
                <p className="mt-2 text-gray-400 duration-300 hover:text-gray-600 self-center cursor-pointer">Login instead</p>
            </a>
        </div>
    </div>
  )
}
