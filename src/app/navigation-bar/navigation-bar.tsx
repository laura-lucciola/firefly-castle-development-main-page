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
import { useTranslation } from 'react-i18next';
import LocaleFlags from '../../locales/locale-flag';

function NavigationBar() {
    const { theme, toggleTheme } = useTheme();
    const { i18n, t } = useTranslation();
    const companyName = process.env.REACT_APP_COMPANY_NAME;

    return (
        <Navbar className={`${theme}`}>
            <Container id="nav-items-container" className="nav-items-container">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="company-logo-image"
                        alt={t('common.logoAlt', { companyName: companyName })}
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">
                        {t('navigationBar.home')}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/feedback">
                        {t('navigationBar.feedback')}
                    </Nav.Link>
                    <Nav.Link as={Link} to="/contact">
                        {t('navigationBar.contact')}
                    </Nav.Link>
                </Nav>
            </Container>
            <Container id="nav-translation-container" className="nav-translation-container">
                {i18n.resolvedLanguage && (
                    <NavDropdown
                        title={
                            <>
                                {LocaleFlags[i18n.resolvedLanguage].flag}{' '}
                                {LocaleFlags[i18n.resolvedLanguage].nativeName}
                            </>
                        }
                        id="nav-translation-dropdown"
                        className="nav-translation-dropdown"
                    >
                        {Object.keys(LocaleFlags).map(lng => (
                            <NavDropdown.Item
                                key={lng}
                                id="nav-translation-dropdown-item"
                                className="nav-translation-dropdown-item"
                            >
                                <Button
                                    key={lng}
                                    style={{
                                        fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal',
                                    }}
                                    type="submit"
                                    onClick={() => i18n.changeLanguage(lng)}
                                >
                                    {LocaleFlags[lng].flag} {LocaleFlags[lng].nativeName}
                                </Button>
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                )}
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
