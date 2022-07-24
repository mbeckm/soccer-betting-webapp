import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'
import React from 'react'

function signIn({ providers }) {
  return (
    <>
    <div className="flex flex-col items-center">
      <h1 className="mt-24 text-5xl select-none text-slate-900 font-extrabold">Sports Betting App</h1>
      <p className="mt-6 text-lg select-none text-slate-800">This is the app for our sports betting competition!</p>


      <div className="mt-24">
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button 
              className="p-3 bg-blue-500 rounded-lg text-white duration-300 hover:bg-blue-600" 
              onClick={() => SignIntoProvider(provider.id, { callbackUrl: '/dashboard'})}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return  {
        props: { providers }
    }
}
export default signIn