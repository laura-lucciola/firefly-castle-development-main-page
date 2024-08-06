import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { ContactFormValues } from './contact-form-values';

export const getContactFormSchema = () => {
    const { t } = useTranslation();
    const MIN_LENGTH = 1;
    const MAX_EMAIL_LENGTH = 150;
    const MAX_MESSAGE_LENGTH = 5000;

    const schema: yup.ObjectSchema<ContactFormValues> = yup.object().shape({
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
    return schema;
};
export default getContactFormSchema;
