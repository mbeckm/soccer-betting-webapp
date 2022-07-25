import React from 'react'
import Team from './Team'

export default function Matchup(props) {
  function testBet(setBets, result) {
    console.log(Array.isArray(props.bets));
    props.setBets([...props.bets, {user: props.user, match: props.matchId, result: result}]);
    console.log(props.bets);
    console.log(Array.isArray(props.bets));
  }
  return (
    <div className="mb-16 p-8 w-full lg:w-3/4 border border-solid flex flex-col items-center">
        <h2 className="mb-6 text-3xl font-bold text-center">Match {props.matchId}</h2>
        <div className="mb-2 flex flex-row">
            <div className="mx-4 lg:mx-16 w-32 md:w-56 lg:w-80 flex flex-col justify-center">
                <Team teamName={props.team1Name} teamImg={props.team1Img} />
                <button 
                  onClick={ () => testBet(props.setBets, props.team1Name)}
                    className="w-full self-center border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300">Place Bet</button>
            </div>
            <div className="mx-4 lg:mx-16 w-32 md:w-56 lg:w-80 flex flex-col justify-center">
                <Team teamName={props.team2Name} teamImg={props.team2Img}/>
                <button className="w-full self-center border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300">Place Bet</button>
            </div>
        </div>
        <button className="w-2/4 border border-solid h-10 bg-slate-100 duration-300 hover:bg-slate-300">Draw</button>
    </div>
  )
}
