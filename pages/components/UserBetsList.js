import React, { useEffect, useState } from 'react'
import { collection, doc, docs, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase';
import { useSession } from 'next-auth/react';

export default function UserBetsList(props) {
    const { data: session } = useSession();
    const [bets, setBets] = useState([]);

    // collection ref
    const betsRef = collection(db, "bets");
    // query
    const q = query(collection(db, "bets"), where("user_email", "==", props.user_email));

    // Hook that gets the correct data from the database and stores it in the state
    useEffect(() => {
      const getBets = async () => {
        const data = await getDocs(q);
        setBets(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      };
      getBets();

    }, []);
   
    
  return (
    <div>
        <p>yooo</p>
        {bets.map((bet) => (
          <>
            <p>{bet.match_id}</p>
            <p>{bet.user_email}</p>
            <p>{bet.result}</p>

          </>
          )
        )}
    </div>
  )

}
