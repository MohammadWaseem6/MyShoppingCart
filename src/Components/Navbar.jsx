import { Navbar, Nav, Button, Container, Modal } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <Navbar expand="sm">
            <Container>
                <Navbar.Brand href="/">Ecom Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Button >Items in Cart 0</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent