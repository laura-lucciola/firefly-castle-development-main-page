export interface ContactFormValues {
    emailAddress: string;
    emailSubject: string;
    message: string;
}

export const EmptyContactFormValues: ContactFormValues = {
    emailAddress: '',
    emailSubject: '',
    message: '',
};
