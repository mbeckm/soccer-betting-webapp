import React from 'react'
import Team from './Team'

export default function Matchup(props) {
  return (
    <div className="mb-16 p-8 w-full lg:w-3/4 border border-solid flex flex-col items-center">
        <h2 className="mb-6 text-3xl font-bold text-center">Match {props.matchId}</h2>
        <div className="mb-2 flex flex-row">
            <div className="mx-4 lg:mx-16 flex flex-col justify-center">
                <Team teamName={props.team1Name} teamImg={props.team1Img} />
                <button className="w-3/4 self-center border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300">Place bet</button>
            </div>
            <div className="mx-4 lg:mx-16 flex flex-col justify-center">
                <Team teamName={props.team2Name} teamImg={props.team2Img}/>
                <button className="w-3/4 self-center border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300">Place bet</button>
            </div>
        </div>
        <button className="w-2/4 border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300">Draw</button>
        
    </div>
  )
}
