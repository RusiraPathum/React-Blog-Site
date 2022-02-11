
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">Blog</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;