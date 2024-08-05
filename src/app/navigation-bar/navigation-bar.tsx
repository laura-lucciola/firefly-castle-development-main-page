import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/company-logo.svg';
import { useTheme } from '../color-theme/theme-context';
import { Button } from 'react-bootstrap';
import './navigation-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavigationBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Navbar className={`${theme}`}>
            <Container id="nav-items-container" className="nav-items-container">
                <Navbar.Brand href="/">
                    <img src={logo} className="company-logo-image" alt="Company logo" />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/feedback">
                        Feedback
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                        Contact
                    </Nav.Link>
                </Nav>
            </Container>
            <Container id="nav-theme-container" className="nav-theme-container">
                <Button className={`${theme}`} onClick={toggleTheme}>
                    {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                </Button>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;
