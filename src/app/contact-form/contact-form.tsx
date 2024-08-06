import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import getContactFormSchema from './get-contact-form-schema';
import { ContactFormValues, EmptyContactFormValues } from './contact-form-values';

interface ContactFormProps {
    onSubmit: (values: ContactFormValues) => void;
}

const ContactForm: React.FC<ContactFormProps> = props => {
    const { t } = useTranslation();
    const schema = getContactFormSchema();

    return (
        <Formik
            validationSchema={schema}
            onSubmit={values => props.onSubmit(values)}
            initialValues={EmptyContactFormValues}
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
    );
};

export default ContactForm;
