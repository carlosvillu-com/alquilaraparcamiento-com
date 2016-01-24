import React from 'react'
import ReactDom from 'react-dom'
import Router from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import routes from './routes'

ReactDom.render(<Router routes={routes} history={createBrowserHistory()}/>, document.getElementById('root'))
