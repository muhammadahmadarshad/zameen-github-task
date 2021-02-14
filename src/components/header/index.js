import React, { useState } from 'react';
import {NavLink as Link} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Gist Api</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className='nav-link' activeClassName='text-white' to="/search">Search</Link>
            </NavItem>
            <NavItem>
              <NavLink target='_blank' href="https://github.com/reactstrap/reactstrap">Gist Api Reference</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Header;