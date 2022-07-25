import React, { useState } from 'react'
import Team from './Team'

export default function Matchup(props) {
  const [team1Selected, setTeam1Selected] = useState(false)
  const [team2Selected, setTeam2Selected] = useState(false)
  const [drawSelected, setDrawSelected] = useState(false)

  function makeBet(setBets, result) {
    // check if there is already a match in state with the elements match id (matchIdServer)
    // if (props.bets.some(e => e.matchId === this.matchId)) {
    // true: replace the "result" value with the new value
    // false: add value to state
    props.setBets([...props.bets, {user: props.user, matchId: props.matchIdServer, result: result}]);
  }
  return (
    <div className="mb-16 p-8 w-full lg:w-3/4 border border-solid flex flex-col items-center">
        <h2 className="mb-6 text-3xl font-bold text-center">Match {props.matchId}</h2>
        <div className="mb-2 flex flex-row">
            <div className={`mx-4 lg:mx-16 w-32 md:w-56 lg:w-80 flex flex-col justify-center ${team1Selected ? 'border border-solid' : ''}`}>
                <Team teamName={props.team1Name} teamImg={props.team1Img} />
                <button 
                  onClick={ () => {makeBet(props.setBets, props.team1Name);setTeam1Selected(!team1Selected); setTeam2Selected(false); setDrawSelected(false);}}
                  className="w-full self-center border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300">Place Bet</button>
            </div>
            <div className={`mx-4 lg:mx-16 w-32 md:w-56 lg:w-80 flex flex-col justify-center ${team2Selected ? 'border border-solid' : ''}`}>
                <Team teamName={props.team2Name} teamImg={props.team2Img}/>
                <button 
                  onClick={ () => {makeBet(props.setBets, props.team2Name);setTeam2Selected(!team2Selected); setTeam1Selected(false); setDrawSelected(false)}}
                  className={`w-full self-center border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300`}>Place Bet</button>
            </div>
        </div>
        <button 
          onClick={ () => {makeBet(props.setBets, "Draw");setDrawSelected(!drawSelected); setTeam1Selected(false); setTeam2Selected(false);}}
          className={`w-2/4 border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300 ${drawSelected ? 'bg-green-400' : ''}`}>Draw</button>
    </div>
  )
};
