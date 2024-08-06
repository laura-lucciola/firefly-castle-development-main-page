import logo from '../../assets/company-logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin, faDev } from '@fortawesome/free-brands-svg-icons';
import Card from 'react-bootstrap/Card';
import { useTheme } from '../color-theme/theme-context';
import './company-card.scss';
import { useTranslation } from 'react-i18next';

export function CompanyCard() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const companyName = process.env.REACT_APP_COMPANY_NAME;

    return (
        <Card id="company-card" className={`${theme} company-card`}>
            <Card.Header>{t('companyCard.header', { companyName: companyName })}</Card.Header>

            <Card.Subtitle>{t('companyCard.subtitle')}</Card.Subtitle>

            <Card.Img
                className="company-logo-image"
                variant="top"
                src={logo}
                alt={t('common.logoAlt', { companyName: companyName })}
            />

            <Card.Body>
                <Card.Text>{t('companyCard.description')}</Card.Text>

                <div id="social-links" className="social-links">
                    <a
                        href={process.env.REACT_APP_GITHUB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="github-link"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                    <a
                        href={process.env.REACT_APP_GITLAB_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="gitlab-link"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faGitlab} /> GitLab
                    </a>
                    <a
                        href={process.env.REACT_APP_LINKEDIN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        id="linkedin-link"
                        className="social-link"
                    >
                        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                    </a>
                    <a
                        href={process.env.REACT_APP_DEVTO_URL}
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
                <p>
                    <small>{t('companyCard.aiWarning')}</small>
                </p>
                <p>
                    <small>{t('companyCard.cookiesWarning')}</small>
                </p>
            </Card.Footer>
        </Card>
    );
}
