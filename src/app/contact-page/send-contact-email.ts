import emailjs from '@emailjs/browser';
import { ContactFormValues } from '../contact-form/contact-form-values';

const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

export const sendContactEmail = (ev: ContactFormValues) => {
    if (serviceID && templateID && publicKey) {
        const templateParams = {
            emailAddress: ev.emailAddress,
            emailSubject: ev.emailSubject,
            message: ev.message,
        };
        return emailjs.send(serviceID, templateID, templateParams, publicKey);
    }
    return Promise.reject();
};
