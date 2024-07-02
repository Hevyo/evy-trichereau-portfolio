import { Navbar, Container, Nav } from 'react-bootstrap'

function Navigation({ handleScroll}) {
    return (
        <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home" onClick={(e) => handleScroll(e, 'home')}>Evy Trichereau</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end flex-grow-0'>
              <Nav className="me-auto nav">
                <Nav.Link href="#home" onClick={(e) => handleScroll(e, 'home')}>Accueil</Nav.Link>
                <Nav.Link href="#abilities" onClick={(e) => handleScroll(e, 'abilities')}>Compétences</Nav.Link>
                <Nav.Link href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projets</Nav.Link>
                <Nav.Link href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation