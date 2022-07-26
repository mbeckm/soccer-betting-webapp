import React from 'react'
import UserBetsList from './components/UserBetsList'
import { useSession } from 'next-auth/react';

function profile() {
    const { data: session } = useSession();
  return (
    <div>
        {session ? (
          <>
          <h1 className="text-slate-900 text-center text-4xl font-extrabold mt-10">{session.user.firstname}'s Bets</h1>
          <UserBetsList user_email={session.user.email} />
          </>
                    ) : (
          <>
          <p>You must be logged in to see your bets.</p>
          </>
                    )}
              
    </div>
  )
}

export default profile