import React, { useEffect, useState } from 'react'
import Matchup from './components/Matchup'
import Navbar from './components/Navbar'


export default function Dashboard() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    
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
    console.log(matches);

    return (
        <div className="flex flex-col justify-center">
            <Navbar />
            <h1 className="my-14 mb-24 text-center font-bold text-4xl">Your bets</h1>
            <div className="flex flex-col items-center">
                {matches.map((match) => (
                    <Matchup
                    matchId={matches.indexOf(match) + 1} 
                    team1Name={match.team1Name} 
                    team1Img={match.team1Img} 
                    team2Name={match.team2Name} 
                    team2Img={match.team2Img} 
                    />
                ))}
            </div>
            <button className="bg-teal-400 my-6 w-2/4 h-12 text-white text-xl font-extrabold duration-300 hover:bg-teal-600 hover:shadow-sm">Submit Bets</button>
        </div>
    )
    }

//   return (
//     <div className="flex flex-col justify-center">
//         <Navbar />
//         <h1 className="my-14 mb-24 text-center font-bold text-4xl">Your bets</h1>
//         <div className="flex flex-col items-center">
//             <Matchup />
//             <Matchup />
//             <button className="bg-teal-400 my-6 w-2/4 h-12 text-white text-xl font-extrabold duration-300 hover:bg-teal-600 hover:shadow-sm">Submit Bets</button>
//         </div>
//     </div>
//   )
// }
