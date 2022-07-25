import React from 'react'
import UserBetsList from './components/UserBetsList'
import { useSession } from 'next-auth/react';

function profile() {
    const { data: session } = useSession();
  return (
    <div>
        {session ? (
            <UserBetsList />
                    ) : (
            <p>You must be logged in to see your bets.</p>
                    )}
    </div>
  )
}

export default profile