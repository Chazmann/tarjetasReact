import React from 'react'
import './card.css'


const AutoContainer = (props) => {
  return (
    <article className="card_item">
      <h2 className='quando'>{props.marca}</h2>
      <blockquote className='lato'>{props.modelo}</blockquote>
      <div className="divider_light" />
    
      <div className="divider_light" />
      <p className='lato'>Estudios: {props.anio}</p>
      <p className='lato'>Observaciones: <b>{props.bencina}</b></p>
      <div className="divider_light" />
    </article>
  )
}

export default AutoContainer