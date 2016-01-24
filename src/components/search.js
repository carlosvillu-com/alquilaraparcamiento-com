import React from 'react'

export default class Search extends React.Component {

  static get propTypes () {
    return {
      history: React.PropTypes.object
    }
  }

  onSubmit (evt) {
    evt.preventDefault()
    console.log('Buscando', this.refs.search.value)
    this.props.history.pushState(null, '/list', {term: this.refs.search.value})
  }

  render () {
    return (
      <form className='Search' onSubmit={this.onSubmit.bind(this)}>
        <label htmlFor='search'>Buscar:</label>
        <input ref='search' type='text' name='search'/>
        <input type='submit' value='Buscar'/>
      </form>
    )
  }
}

