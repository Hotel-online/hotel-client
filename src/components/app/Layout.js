import React from 'react'
import {
  withRouter
} from 'react-router-dom'
import { RouteWithSubRoutes } from '../../node_m/react-router-dom-ext'

import {
} from 'react-router-dom'
import { routes } from '../../routes'
import { menus } from '../../menu'
import AppMenu from './AppMenu'

///////
import '../css/style.css';

class SidebarExample extends React.Component {
  render() {

    return (
      <div >
        <div>
          <AppMenu/>
        </div>
        <div>
          <hr />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </div>
      </div>
    )
  }
}

export default withRouter(SidebarExample)
