import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import Matchup from './components/Matchup'
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';


export default function Dashboard() {
    const { data: session } = useSession();
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [bets, setBets] = useState([])
    
    useEffect(() => {
        setLoading(true)
        fetch('https://www.openligadb.de/api/getmatchdata/bl1')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
    }, [])
    
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No match data</p>
    
    const matches = [];
    for (const element of data) {
        matches.push({
            'id':element.MatchID,
            'team1Name':element.Team1.TeamName,
            'team1Img':element.Team1.TeamIconUrl,
            'team2Name':element.Team2.TeamName,
            'team2Img':element.Team2.TeamIconUrl,
        })
    }

    async function addBet() {
        console.log("clicked")
        for (item of bets) {
            console.log(item);
            try {
                console.log("try")
                const docRef = await addDoc(collection(db, "bets"), {
                  match_id: item.matchId,
                  user_email: item.user,
                  result: item.result,
                  timestamp: serverTimestamp(),
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }

        };

    return (
        <div className="flex flex-col">
        {session ? (
            <>
                <h1 className="my-14 mb-24 text-center font-bold text-4xl">{session.user.name}'s Dashboard</h1>
                <div className="flex flex-col items-center">
                    {matches.map((match) => (
                        <Matchup
                        matchId={matches.indexOf(match) + 1} 
                        team1Name={match.team1Name} 
                        team1Img={match.team1Img} 
                        team2Name={match.team2Name} 
                        team2Img={match.team2Img}
                        bets={bets}
                        setBets={setBets}
                        user={session.user.email} 
                        />
                    ))}
                    <button onClick={() => addBet()}className="bg-teal-400 mb-6 w-2/4 h-12 text-white text-xl font-extrabold duration-300 hover:bg-teal-600 hover:shadow-sm">Submit Bets</button>
                </div>
            </>
        ) : (
            <>
                <h1 className="text-lg">You need to be signed in to access your dashboard.</h1>
            </>
        )}
        </div>
     )
    }