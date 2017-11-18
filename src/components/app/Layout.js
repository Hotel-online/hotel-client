import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { RouteWithSubRoutes } from '../../node_m/react-router-dom-ext'

import {
} from 'react-router-dom'
import { routes } from '../../routes'
import Header from './Header'
import Footer from './Footer'

///////
import '../css/style.css';

class SidebarExample extends React.Component {
  render() {

    return (
      <div >
        <div>
        <Header/>
      </div>
        <div>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    )
  }
}

export default withRouter(SidebarExample)
