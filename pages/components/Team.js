import React from 'react'

export default function Team(props) {
  return (
    <div className="flex flex-col">
        <h1 className="mb-4 text-md lg:text-2xl font-bold self-center text-center">{props.teamName}</h1>
        <img className="mb-4 h-32 max-w-32 self-center" src={props.teamImg}/>
    </div>
  )
}
