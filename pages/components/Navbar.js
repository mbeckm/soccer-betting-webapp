import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

export default function Navbar() {
    const { data: session } = useSession();


  return (
    <div className="px-10 w-full h-14 bg-slate-700 text-slate-50 flex flex-row justify-between items-center">
        <div className="">
            <p className="font-extrabold select-none">Sports betting app</p>
        </div>
        <div className="flex flex-row items-center">
            <a href="./.">
                <p className="ml-5 cursor-pointer duration-300 hover:text-slate-400">Home</p>
            </a>
            {session ? (
                <>
                    <a href="../dashboard">
                        <p className="ml-5 cursor-pointer duration-300 hover:text-slate-400">Dashboard</p>
                    </a>
                    <div onClick={signOut} className="ml-5 py-1 px-3 duration-300 rounded-md cursor-pointer hover:bg-slate-800 hover:shadow-md flex items-center">
                        <p>{session?.user?.name}</p>
                        <img className="ml-5 h-8 w-8 rounded-full cursor-pointer" src={session?.user?.image} />
                    </div>
                </>
            ):(
                <>
                    <button className="ml-5 px-4 rounded-md h-8 duration-300 hover:bg-slate-800" onClick={signIn}>Sign In</button>
                </>
            )}


        </div>
        
    </div>
  )
}
