import { signOut } from 'firebase/auth';
import { useRouter } from 'next/router'
import React from 'react'
import { auth } from '../firebase';

export default function Dashboard() {
    const router = useRouter();

    function handleLogout(e) {
        e.preventDefault();
        signOut(auth)
            .then(() => {
                console.log("youre logged out");
                router.push("/")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }   
  return (
    <div>
        <h2>Hello mate. <br/> Welcome aboard </h2>
        <div>
            <form onSubmit={handleLogout}>
                <button type="submit">Logout</button>
            </form>
        </div>
    </div>
  )
}
