import React from 'react'
import {Link} from 'react-router'

const Property = (props, state) => (
  <article className='Property'>
    <Link to={`/detail/${props.provincie}/${props.id}`}>
      <img className='Property-image' src={`http://lorempixel.com/100/100/city?_cache=${Math.random()}`} alt={`Piso en ${props.street}`} width='100' height='100' />
    </Link>
    <details className='Property-details'>
      <summary className='Property-summary'>Detalles</summary>
      <p className='Property-street'>direccion: {props.street}€</p>
      <p className='Property-price'>precio: {props.price}</p>
      <details className='Property-features'>
        <summary className='Property-features-summary'>Caracteristicas</summary>
        {props.features.map((feature, index) => <p className='Property-feature' key={index}>{feature}</p>)}
      </details>
    </details>
  </article>
)

Property.propTypes = {
  features: React.PropTypes.array,
  street: React.PropTypes.string,
  price: React.PropTypes.number
}

export default Property
