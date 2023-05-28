import React from 'react'
import './card.css'
import UserCard from './Card'
import personas from '../datos/personas.json'

const CardContainer = () => {
  return (
    <div className='card__container'>
      <h1>CardContainer</h1>
      <div className="list__items">
        {personas.map ( persona =>
          <UserCard name={persona.nombre} profesion={persona.profesion} urlimg={persona.foto}/>
          )}
        </div>
    </div>
  )
}

export default CardContainer