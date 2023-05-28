import React from 'react'
import './card.css'
import './duotone.css'

const UserCard = (props) => {
  return (
    <article className="card_item">
      <h2 className='quando'>{props.name}</h2>
      <blockquote className='lato'>{props.profesion}</blockquote>
      <div className="divider"></div>
      <div class="duotone">
        {/* <img src="http://source.unsplash.com/HvZDCuRnSaY/800x600" /> */}
        <img src={props.urlimg} alt="" />
      </div>
      <div className="divider_light"></div>
      <p className='lato'>Estudios: {props.est}</p>
      <p className='lato'>Observaciones: <b>{props.observaciones}</b></p>
      <div className="divider_light"></div>



    </article>
  )
}

export default UserCard