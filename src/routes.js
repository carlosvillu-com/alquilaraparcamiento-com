import React from 'react'
import {Router, Route, Redirect, IndexRoute} from 'react-router'

import Layout from './layout'
import Search from './components/search'
import List from './components/list'
import Detail from './components/detail'

export default  (
  <Router>
    <Route path="/" component={Layout}>
      <IndexRoute component={Search}/>
      <Route path="list" component={List} />
      <Route path="detail/:provincie/:id" component={Detail} />
    </Route>
  </Router>
)
