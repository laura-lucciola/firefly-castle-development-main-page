import { useTranslation } from 'react-i18next';
import { useTheme } from '../color-theme/theme-context';
import { Alert, Card, Spinner } from 'react-bootstrap';
import ContactForm from '../contact-form/contact-form';
import { useState } from 'react';
import { ContactFormValues } from '../contact-form/contact-form-values';
import { sendContactEmail } from './send-contact-email';

function ContactPage() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const [loading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(true);
    const [alertVariant, setAlertVariant] = useState('success');

    const onFormSubmit = (ev: ContactFormValues) => {
        setLoading(true);
        sendContactEmail(ev).then(
            _ => {
                setLoading(false);
                setShowAlert(true);
                setAlertVariant('success');
            },
            error => {
                console.error(error);
                console.error(t('contactCard.emailAlert.danger'));
                setLoading(false);
                setShowAlert(true);
                setAlertVariant('danger');
            }
        );
    };

    return (
        <div>
            <Card id="contact-card" className={`${theme} contact-card`}>
                <Card.Header>{t('contactCard.header')}</Card.Header>

                <Card.Body>
                    {loading ? (
                        <Spinner animation="border" role="status"></Spinner>
                    ) : (
                        <ContactForm onSubmit={values => onFormSubmit(values)}></ContactForm>
                    )}
                </Card.Body>

                <Card.Footer>
                    <small>{t('contactCard.marketingWarning')}</small>
                </Card.Footer>
            </Card>
            {showAlert && (
                <Alert variant={alertVariant} dismissible>
                    {t(`contactCard.emailAlert.${alertVariant}`)}
                </Alert>
            )}
        </div>
    );
}
export default ContactPage;
