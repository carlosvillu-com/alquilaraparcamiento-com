import React from 'react'
import {Link} from 'react-router'

export default class FooterSEO extends React.Component {

  static get propTypes () {
    return {
    }
  }

  constructor (props, ctxt) {
    super(props, ctxt)
    this.state = {provincies: {}}
  }

  componentDidMount () {
    window.fetch('/db.json')
          .then(resp => resp.json())
          .then(db => {
            this.setState({
              provincies: db
            })
          })
  }

  render () {
    return (
      <div className='FooterSEO'>
        {
          Object.keys(this.state.provincies).map((provincie, index) => (
            <Link key={index} className='FooterSEO-search' to='/list' query={{term: provincie}}>
              <p className='FooterSEO-query'>
                Pisos en <small className='FooterSEO-term'>{provincie.toUpperCase()}</small>
              </p>
            </Link>
          ))
        }
      </div>
    )
  }
}

