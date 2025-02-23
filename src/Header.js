import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand id="header-navbar"style={{paddingLeft: '8rem', margin: 'auto'}}>My Favorite Books</Navbar.Brand>
        <NavItem style = {{paddingRight: '2rem'}}><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem style = {{paddingRight: '2rem'}}><Link to="/About" className="nav-link" id="about-nav">About</Link></NavItem>
      </Navbar>
    )
  }
}

export default Header;
