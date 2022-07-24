import { useSession, signIn, signOut } from 'next-auth/react'
import React from 'react'

export default function Navbar() {
    const { data: session } = useSession();


  return (
    <div className="px-10 w-full h-14 bg-slate-700 text-slate-50 flex flex-row justify-between items-center">
        <div className="">
            <p className="font-extrabold select-none">Sports betting app</p>
        </div>
        <div className="flex flex-row">
            <a href="./.">
                <p className="ml-5 cursor-pointer duration-300 hover:text-slate-400">Home</p>
            </a>
            {session ? (
                <>
                    <a href="../dashboard">
                        <p className="ml-5 cursor-pointer duration-300 hover:text-slate-400">Dashboard</p>
                    </a>
                    <p className="ml-5">{session?.user?.name}</p>
                    <img onClick={signOut} className="h-8 rounded-full cursor-pointer" src={session?.user?.image} />
                </>
            ):(
                <>
                    <button onClick={signIn}>Sign In</button>
                </>
            )}


        </div>
        
    </div>
  )
}
