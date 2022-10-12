import './card.css'

import React from 'react'



const Card = ({ data }) => {

    return (
        <div className='card-container' >
            <a href={data.company.url} target='blank'>

            <p>{data.primaryText.slice(0, 60) + '..'}</p>
            <img className='card-img' src={data.image} />
            <p>{data.description}</p>
            </a>
            <div className='cta-container'>
            <p>{data.company.name}</p>
            <button className='cta-btn'>
              {data.CTA} 
            </button>
            </div>
        </div>
    )
}

export default Card
