import React from 'react'
import {Link} from 'react-router'

import FooterSEO from './components/footerSEO'


export default class Layout extends React.Component {

  static get propTypes () {
    return {
      children: React.PropTypes.element
    }
  }

  render () {
    return (
      <div className='App'>
        <header className='Layout-header'>
          <h1 className='Layout-title'>
            <Link className='Layout-logo' to='/'>Mega Alquiler</Link>
          </h1>
        </header>
        <section className='Layout-body'>
          { this.props.children }
        </section>
        <footer className='Layout-footer'>
          <FooterSEO />
          <small>alquilaraparcamiento.com©{ new Date().getFullYear() }</small>
        </footer>
      </div>
    )
  }
}
