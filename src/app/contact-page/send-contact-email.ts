// emailService.ts
import emailjs from '@emailjs/browser';
import { ContactFormType } from './contact-form-type';

const serviceID = process.env.REACT_APP_EMAIL_SERVICE_ID;
const templateID = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY;

export const sendContactEmail = (ev: ContactFormType) => {
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
