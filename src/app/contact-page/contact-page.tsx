import { useTranslation } from 'react-i18next';
import { useTheme } from '../color-theme/theme-context';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import * as formik from 'formik';
import * as yup from 'yup';

function ContactPage() {
    const { t } = useTranslation();
    const { theme } = useTheme();
    const { Formik } = formik;
    const MIN_LENGTH = 1;
    const MAX_EMAIL_LENGTH = 150;
    const MAX_MESSAGE_LENGTH = 5000;
    const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

    const schema = yup.object().shape({
        emailAddress: yup
            .string()
            .required(t('validation.required', { field: t('contactForm.emailAddress.label') }))
            .email(t('validation.email'))
            .min(MIN_LENGTH, t('validation.min', { field: t('contactForm.emailAddress.label'), value: MIN_LENGTH }))
            .max(
                MAX_EMAIL_LENGTH,
                t('validation.max', { field: t('contactForm.emailAddress.label'), value: MAX_EMAIL_LENGTH })
            ),
        emailSubject: yup
            .string()
            .required(t('validation.required', { field: t('contactForm.emailSubject.label') }))
            .min(MIN_LENGTH, t('validation.min', { field: t('contactForm.emailSubject.label'), value: MIN_LENGTH }))
            .max(
                MAX_EMAIL_LENGTH,
                t('validation.max', { field: t('contactForm.emailSubject.label'), value: MAX_EMAIL_LENGTH })
            ),
        message: yup
            .string()
            .required(t('validation.required', { field: t('contactForm.message.label') }))
            .min(MIN_LENGTH, t('validation.min', { field: t('contactForm.message.label'), value: MIN_LENGTH }))
            .max(
                MAX_MESSAGE_LENGTH,
                t('validation.max', { field: t('contactForm.message.label'), value: MAX_MESSAGE_LENGTH })
            ),
    });

    const onHandleSubmit = (ev: { emailAddress: string; emailSubject: string; message: string }) => {
        console.log('onHandleSubmit');
        console.log(ev);
        if (serviceID && templateID) {
            const templateParams = {
                emailAddress: ev.emailAddress,
                emailSubject: ev.emailSubject,
                message: ev.message,
            };
            emailjs.send(serviceID, templateID, templateParams, publicKey).then(
                result => {
                    console.log(result);
                    console.log(result.text);
                    console.log(result.status);
                    console.log('message sent!');
                },
                error => {
                    console.log(error);
                    console.log('error sending message, try again!');
                }
            );
        }
    };

    return (
        <Card id="contact-card" className={`${theme} contact-card`}>
            <Card.Header>{t('contactCard.header')}</Card.Header>

            <Card.Body>
                <Formik
                    validationSchema={schema}
                    onSubmit={ev => onHandleSubmit(ev)}
                    initialValues={{
                        emailAddress: '',
                        emailSubject: '',
                        message: '',
                    }}
                >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId="emailAddressValidation">
                                    <Form.Label>{t('contactForm.emailAddress.label')}</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="emailAddress"
                                        placeholder={t('contactForm.emailAddress.placeholder')}
                                        value={values.emailAddress}
                                        onChange={handleChange}
                                        isInvalid={!!errors.emailAddress}
                                        isValid={touched.emailAddress && !errors.emailAddress}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.emailAddress}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="emailSubjectValidation">
                                    <Form.Label>{t('contactForm.emailSubject.label')}</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="emailSubject"
                                        placeholder={t('contactForm.emailSubject.placeholder')}
                                        value={values.emailSubject}
                                        onChange={handleChange}
                                        isInvalid={!!errors.emailSubject}
                                        isValid={touched.emailSubject && !errors.emailSubject}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.emailSubject}</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="4" controlId="messageValidation">
                                    <Form.Label>{t('contactForm.message.label')}</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="message"
                                        placeholder={t('contactForm.message.placeholder')}
                                        value={values.message}
                                        onChange={handleChange}
                                        isInvalid={!!errors.message}
                                        isValid={touched.message && !errors.message}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Button type="submit">{t('contactCard.submit')}</Button>
                        </Form>
                    )}
                </Formik>
            </Card.Body>

            <Card.Footer>
                <small>{t('contactCard.marketingWarning')}</small>
            </Card.Footer>
        </Card>
    );
}
export default ContactPage;
