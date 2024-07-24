import { Navbar, Container, Nav } from 'react-bootstrap'
import "./index.scss"

function Navigation({ handleScroll}) {
    return (
        <Navbar sticky="top" expand="lg" bg="primary">
          <Container>
            <Navbar.Brand href="#home" onClick={(e) => handleScroll(e, 'home')}>
              <img src="/logo.webp" className='logo' width="35" height="35" alt="Logo de Evy Trichereau"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className=' justify-content-end flex-grow-0'>
              <Nav className="me-auto nav">
                <Nav.Link className="text-secondary navlink" href="#home" onClick={(e) => handleScroll(e, 'home')}>Accueil</Nav.Link>
                <Nav.Link className="text-secondary" href="#abilities" onClick={(e) => handleScroll(e, 'abilities')}>Compétences</Nav.Link>
                <Nav.Link className="text-secondary" href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projets</Nav.Link>
                <Nav.Link className="text-secondary" href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )
}

export default Navigation