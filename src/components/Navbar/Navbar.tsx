import { useState } from 'react';
import { Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

const brandStyle = { color: 'white', flex: 2 };

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar style={{ backgroundColor : "#111111" }} expand="md">
      <NavbarBrand style={brandStyle} className="text-center" >Earthquake Visualization</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
    </Navbar>
  );
}
