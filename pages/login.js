import React from 'react'
import Navbar from './components/Navbar'

export default function Login() {
  return (
    <div className="flex flex-col justify-center">
        <Navbar />
        <div className="py-4 px-9 my-20 w-full sm:w-3/4 lg:w-2/4 max-w-5xlg border border-solid rounded-2xl flex flex-col self-center">
            <h1 className="text-center my-8 text-4xl select-none font-bold">Login</h1>        
            <div className="mb-3 flex flex-col w-full md:w-3/4 lg:w-5/8 self-center">
                <label className="px-3" name="email">E-Mail</label>
                <input className="border border-solid rounded-xl border-gray-400 p-3" type="text" placeholder="Email" name="email"></input>
            </div>
            <div className="mb-3 flex flex-col w-full md:w-3/4 lg:w-5/8 self-center">
                <label className="px-3" name="password">Password</label>
                <input className="border border-solid rounded-xl border-gray-400 p-3" type="password" placeholder="Password" name="password"></input>
            </div>
            <button className="mt-3 bg-sky-500 text-sky-100 font-bold border duration-300 hover:bg-sky-700 rounded-xl w-2/4 h-12 self-center">Login</button>
            <p className="mt-2 text-gray-400 duration-300 hover:text-gray-600 self-center cursor-pointer">Signup instead</p>
            <p className="mt-2 text-gray-400 duration-300 hover:text-gray-600 self-center cursor-pointer">I forgot my password</p>
        </div>
    </div>
  )
}
