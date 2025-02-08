import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav } from 'reactstrap';

import DropdownList from './DropdownList';
import NavBarForm from './NavbarForm';

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar style={{ backgroundColor : "#111111" }} expand="md">
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto" navbar>
          <DropdownList />
          <NavBarForm />
        </Nav>
      </Collapse>
    </Navbar>
  );
}
