import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
      <header>
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Evy Trichereau</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end flex-grow-0'>
              <Nav className="me-auto nav">
                <Nav.Link href="#home">Accueil</Nav.Link>
                <Nav.Link href="#abilities">Compétences</Nav.Link>
                <Nav.Link href="#projects">Projets</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
}

export default Header