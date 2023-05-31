import React from 'react'
import './card.css'
import UserCard from './Card'
import AutoContainer from './Pimbas'
import personas from '../datos/personas.json'
import autoMovil from '../datos/autos.json'


const CardContainer = () => {
  return (
    <div className='card__container'>
      <h1>CardContainer</h1>

      <div className="list__items">
        {personas.map(persona =>
          <UserCard name={persona.nombre} profesion={persona.profesion} urlimg={persona.foto} observaciones={persona.obs} est={persona.estudios} />

        )}
      </div>
      <div className="list__items">
        {autoMovil.map(autto =>
          <AutoContainer marca={autto.marca} model={autto.modelo} vers={autto.version} anio={autto.año} bencina={autto.combustible} />

        )}
      </div>
      <div className="list__items">
        {autoMovil.map(autto =>
          <UserCard name={autto.modelo} profesion={autto.marca} urlimg={autto.foto} observaciones={autto.año} est={autto.combustible} />

        )}
      </div>

    </div>

  )
}

export default CardContainer