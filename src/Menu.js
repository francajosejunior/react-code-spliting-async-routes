import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import getmenu from './getmenu'

class Menu extends Component {
  state = {
    menu: [

    ]
  }

  componentDidMount() {
    getmenu(2000).then(result => {
      this.setState({
        menu: result
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.menu.map(m =>
          (<Link to={m.to}>{m.title}</Link>)
        )}
        <hr />
      </div>
    );
  }
}

export default Menu;
