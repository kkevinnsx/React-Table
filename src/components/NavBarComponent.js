import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/FirstExercice"    >Primeiro Exercicio </Nav.Link>
            <Nav.Link href="/SecondExercice"   >Segundo Exercicio  </Nav.Link>
            <Nav.Link href="/ThirdExercice"    >Terceiro Exercicio </Nav.Link>
            <Nav.Link href="/FourthExercice"   >Quarto Exercicio   </Nav.Link>
            <Nav.Link href="/FifthExercice"    >Quinto Exercicio   </Nav.Link>
            <Nav.Link href="/SixthExercice"    >Sexta Exercicio    </Nav.Link>
                    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarComponent;