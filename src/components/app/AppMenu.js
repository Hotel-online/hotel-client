import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'




class AppMenu extends Component {
    render() {
        const { menus, onRequestClose, classes } = this.props
        return (
            <Menu menus= {menus} classes= {classes}
              onRequestClose={onRequestClose}>
                Loading...
              </Menu>
        )
    }
}
AppMenu.propTypes = {
    menus: PropTypes.array.isRequired,
}

export default (AppMenu)