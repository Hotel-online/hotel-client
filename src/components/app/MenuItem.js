import React from 'react';
import PropTypes from 'prop-types';



import {
  Route,
  Link
} from 'react-router-dom'




class MenuItem extends React.Component<any, any> {
  static defaultProps = {
    openImmediately: false,
  };

  state = {
    open: false,
  };

  componentWillMount() {
    if (this.props.openImmediately) {
      this.setState({ open: true });
    }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {


    let { path, title, novisible, replace } = this.props;
    let { children } = this.props;
    if (path) {
      if (novisible) {
        if (replace) {
          return (
            <Route exact path={replace}
            />
          )

        } else
          return (
            <Route exact path={path}
            />
          )

      } else {


        return (
          <Route path={path}
            children={({ match }) => {

              if (replace) {

                path = replace
              }

              return (
                <Link to={path}>

                  <div onClick={this.props.onClick}
                    
                  >
                    {match ? '> ' : ''}
                    &nbsp;{title}


                  </div>
                </Link>
              )
            }} />
        )
       
      }

    }


  
    return (
      <div >
        <div>
          {children}
        </div>
      </div>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.node,
  //classes: PropTypes.object.isRequired,
  path: PropTypes.string,
  onClick: PropTypes.func,
  openImmediately: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isChildren: PropTypes.bool,
  visible: PropTypes.bool,
};

export default MenuItem;
