import React from 'react'
import './card.css'
import UserCard from './Card'

const CardContainer = () => {
  return (
    <div className='card__container'>
      <h1>CardContainer</h1>
      <UserCard />
      <UserCard />
    </div>
    



  )
}

export default CardContainer