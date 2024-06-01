import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoImage from '../assets/Logo-WaveWounderland.png';

function NavigationBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="fixed-top px-3">
        <Container className="navbar navbar-expand-lg">
          <Navbar.Brand href="#home">
            <img src={logoImage} alt="" width="60px" height="55px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav container">
            <Nav className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <Nav.Link href="#home" className="mx-2">
                Home
              </Nav.Link>
              <Nav.Link href="#dashboard" className="mx-2">
                Dashboard
              </Nav.Link>
              <NavDropdown title="Edukasi" id="collapsible-nav-dropdown" className="mx-2">
                <NavDropdown.Item href="#action/3.1">Edukasi</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Magazine</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fun Fact</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#komunitas" className="mx-2">
                Komunitas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
