import emailjs from '@emailjs/browser';
import { ContactFormValues } from '../contact-form/contact-form-values';

const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

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
