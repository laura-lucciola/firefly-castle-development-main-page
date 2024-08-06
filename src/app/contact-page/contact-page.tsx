import { useTranslation } from 'react-i18next';
import { useTheme } from '../color-theme/theme-context';
import { Card } from 'react-bootstrap';
import ContactForm from './contact-form';

function ContactPage() {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <Card id="contact-card" className={`${theme} contact-card`}>
            <Card.Header>{t('contactCard.header')}</Card.Header>

            <Card.Body>
                <ContactForm></ContactForm>
            </Card.Body>

            <Card.Footer>
                <small>{t('contactCard.marketingWarning')}</small>
            </Card.Footer>
        </Card>
    );
}
export default ContactPage;
