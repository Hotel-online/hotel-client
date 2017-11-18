import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import MenuItem from './MenuItem';
//import List from 'material-ui/List';

//import { pageToTitle } from '../../node_m/react-router-dom-ext'

import {
    Link,
    withRouter,
} from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <header>
                    <nav className="main">
                      <div className="imglogo">
                      </div>
                      <ul>
                        <li><Link to="/home">Inicio</Link></li>
                        <li><Link to="/login">login</Link></li>
                        <li><Link to='/catalogo/categorias/list'>Habitaciones</Link></li>
                        <li><Link to="/photos">Fotos</Link></li>
                        <li><Link to="/hotel/person2/list">Person</Link></li>
                        <li><Link to="/hotel/categoria2/list">Categoria</Link></li>
                      </ul>
                      <span>
                        <i className="fa fa-bars fa-2x " aria-hidden="true"></i>
                      </span>
                    </nav>
                  </header>
        )
    }
}


Menu.propTypes = {
    location: PropTypes.object.isRequired,
    menus: PropTypes.array.isRequired,
}

export default withRouter(Menu)


