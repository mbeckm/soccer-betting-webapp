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
    <div className="p-10">
      <div className=" py-5 px-3 my-3 border border-solid bg-slate-800 text-slate-100 flex flex-row text-left">
        <p className="mr-10 w-24 font-bold">Match ID</p>
        {/* Get matchup from api via match id */}
        <p className="mr-10 w-72 font-bold">Matchup</p>
        {/* Get bet from db */}
        <p className="mr-10 w-72 font-bold">Your bet</p>
        {/* Get result from api via match id */}
        <p className="mr-10 w-72 font-bold">Game result</p>
        {/* Get betWon from db and check if its true */}
        <p className="font-bold">Outcome</p>
      </div>
        {bets.map((bet) => (
          <div className=" py-5 px-3 my-3 border border-solid shadow-sm duration-300 flex flex-row text-left hover:shadow-lg">
            <p className="mr-10 w-24">{bet.match_id}</p>
            {/* Get matchup from api via match id */}
            <p className="mr-10 w-72">Bayern vs. Frankfurt</p>
            {/* Get bet from db */}
            <p className="mr-10 w-72">{bet.result}</p>
            {/* Get result from api via match id */}
            <p className="mr-10 w-72">Bayern</p>
            {/* Get betWon from db and check if its true */}
            <p className="">WON! ✔️</p>

          </div>
          )
        )}
    </div>
  )

}
