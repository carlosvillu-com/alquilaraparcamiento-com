import React from 'react'

import Property from './property'

export default class List extends React.Component {

  static get propTypes () {
    return {
      location: React.PropTypes.object
    }
  }

  constructor (props, ctxt) {
    super(props, ctxt)
    this.state = {provincies: window.APP.DB}
  }

  render () {
    const {term} = this.props.location.query
    return (
      <div className='List'>
         <header className='List-header'>
          <h2 className='List-header-title'>Listado de resultados para</h2>
          <h1 className='List-header-tern'>{this.props.location.query.term}</h1>
        </header>
        <section className='List-results'>
          {
            !this.state.provincies[term]
              ? <h4 className='List-waiting'>Buscando por <small className='List-term'>{term}</small></h4>
              : this.state.provincies[term].map((property, index) => <Property key={index} {...property} id={index}/>)
          }
        </section>
      </div>
    )
  }
}

