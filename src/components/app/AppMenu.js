import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'




class AppMenu extends Component {
    render() {
        const { menus} = this.props
        return (
            <Menu menus= {menus} >
                Loading...
              </Menu>
        )
    }
}
AppMenu.propTypes = {
    menus: PropTypes.array.isRequired,
}

export default (AppMenu)