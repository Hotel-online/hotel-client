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


class SidebarExample extends React.Component {
  render() {

    return (
      <div >
        <div>
          <AppMenu menus={menus}
            onRequestClose={() => { console.log('hola') }}>
            Loading...
              </AppMenu>
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
