import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/company-logo.svg';
import { useTheme } from '../color-theme/theme-context';
import { Button } from 'react-bootstrap';
import './navigation-bar.scss';

function NavigationBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar className={`${theme}`}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} className="company-logo-image" alt="Company logo" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Container>
            <Container>
                <Button className={`${theme}`} onClick={toggleTheme}>
                    Toggle theme
                </Button>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;
