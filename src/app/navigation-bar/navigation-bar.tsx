import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../assets/company-logo.svg';
import { useTheme } from '../color-theme/theme-context';
import { Button, NavDropdown } from 'react-bootstrap';
import './navigation-bar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import {  useTranslation } from 'react-i18next';

const lngs :any = {
  en: { nativeName: 'English' },
  pt: { nativeName: 'Português' }
};

function NavigationBar() {
    const { theme, toggleTheme } = useTheme();
      const { t, i18n } = useTranslation();

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
            <Container id="nav-translation-container" className="nav-translation-container">
                <NavDropdown title={i18n.resolvedLanguage} id="nav-translation-dropdown" className="nav-translation-dropdown">
                    {Object.keys(lngs).map((lng) => (
                        <NavDropdown.Item key={lng} id="nav-translation-dropdown-item" className="nav-translation-dropdown-item" >
                            <Button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                                {lngs[lng].nativeName}
                                </Button>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
            </Container>
        </Navbar>
    );
}
export default NavigationBar;
