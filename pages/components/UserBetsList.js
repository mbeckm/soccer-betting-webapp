import React, { useEffect, useState } from 'react'
import { collection, doc, docs, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { db } from '../../firebase';
import { useSession } from 'next-auth/react';

export default function UserBetsList(props) {
    const { data: session } = useSession();

    // collection ref
    const betsRef = collection(db, "bets");
    // query
    const q = query(betsRef, where("user_email", "==", session.user.email ));

    // THIS HAS NOT GOTTEN ME ANYWHERE
    
    // const userBets = []
    // // real time data collection
    // async function getUserBets(){ 
    //     const querySnapshot = await getDocs(q);
    //     querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //     userBets.push(doc.data())
    //     console.log(userBets)

    //     });
    // }
    
  return (
    <div>
        <p>yooo</p>
        <button
            onClick={() => (getUserBets())}>click me</button>
    </div>
  )

}
