import React from 'react'

import Property from './property'

export default class Detail extends React.Component {

  static get propTypes () {
    return {
      params: React.PropTypes.object
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
    const {provincie, id} = this.props.params
    return (
      <section>
        <header>
          <h1>Detalle de piso</h1>
        </header>
        {
          !this.state.provincies[provincie]
            ? <h4 className='Detail-waiting'>Esperando ...</h4>
            : <Property {...this.state.provincies[provincie][id]} id={parseInt(id, 10)}/>
        }
      </section>
    )
  }
}
