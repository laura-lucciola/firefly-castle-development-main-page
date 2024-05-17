import logo from '../../assets/company-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import Card from 'react-bootstrap/Card';

export function CompanyCard() {
    return (
        <Card id="company-card" className="company-card">
            <Card.Header>Welcome to Firefly Castle Development</Card.Header>

            <Card.Subtitle>Delivering quality since 2024</Card.Subtitle>

            <Card.Img variant="top" src={logo} alt="Firefly Castle Development company logo" height="300px" />

            <Card.Body>
                <Card.Text>
                    We are a software consulting company specializing in cutting-edge solutions for businesses in the
                    United Kingdom.
                </Card.Text>

                <div id="social-links" className="social-links">
                    <a
                        href="https://github.com/laura-lucciola"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="github-link"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a
                        href="https://gitlab.com/laura-lucciola"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="gitlab-link"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faGitlab} /> GitLab
                    </a>
                    <a
                        href="https://www.linkedin.com/in/laura-lucciola/"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="linkedin-link"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a
                        href="https://dev.to/laura-lucciola"
                        target="_blank"
                        rel="noopener noreferrer"
                        id="dev-link"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faDev} /> Dev.to
                    </a>
                </div>
            </Card.Body>

            <Card.Footer>
                <small className="text-muted">
                    This website and image were generated with the AI assistance of Microsoft CoPilot
                </small>
            </Card.Footer>
        </Card>
    );
}
