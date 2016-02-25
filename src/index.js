import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import Router from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import axios from 'axios'

import routes from './routes'

axios.get('/db.json')
  .then(resp => {
    window.APP = {DB: resp.data}
    ReactDom.render(<Router routes={routes} history={createBrowserHistory()}/>, document.getElementById('root'))
  })
