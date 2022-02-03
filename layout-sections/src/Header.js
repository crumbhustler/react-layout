import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    const style = {
        width: this.props.width,
        backgroundColor: this.props.backColor
    }
    return (
        <header style={style} className="Header-main">
        <h1>Header</h1>
        </header>
    )
  }
}

export default Header;

//document.querySelector("header").style.backgroundColor = "red"
