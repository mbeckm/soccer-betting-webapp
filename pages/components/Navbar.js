import React from 'react'

export default function Navbar() {
  return (
    <div className="px-10 w-full h-14 bg-slate-700 text-slate-50 flex flex-row justify-between items-center">
        <div className="">
            <p className="font-extrabold select-none">Sports betting app</p>
        </div>
        <div className="flex flex-row">
            <a href="./.">
                <p className="ml-5 cursor-pointer duration-300 hover:text-slate-400">Home</p>
            </a>
            <a href="./register">
                <p className="ml-5 cursor-pointer duration-300 hover:text-slate-400">Register</p>
            </a>
            <a href="./login">
                <p className="ml-5 cursor-pointer duration-300 hover:text-slate-400">Login</p>
            </a>
        </div>
        
    </div>
  )
}
