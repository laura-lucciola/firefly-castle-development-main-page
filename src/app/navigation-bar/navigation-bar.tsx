import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/company-logo.svg';

function NavigationBar() {
    return (
        <Navbar bg="primary" data-bs-theme="light">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="Company logo" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;
