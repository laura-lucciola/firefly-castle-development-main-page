import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ContactPage from './contact-page';

// Mock modules
jest.mock('../color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark' }),
}));

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

jest.mock('../contact-form/contact-form', () => {
    return function MockContactForm() {
        return <form data-testid="contact-form-mock">Contact Form</form>;
    };
});

jest.mock('./send-contact-email', () => ({
    sendContactEmail: jest.fn(() => Promise.resolve()),
}));

jest.mock('../not-active-alert/not-active-alert', () => ({
    NotActiveAlert: () => <div data-testid="not-active-alert-mock">Alert</div>,
}));

describe('ContactPage Component', () => {
    it('renders without crashing', () => {
        render(<ContactPage />);
        expect(screen.getByTestId('contact-form-mock')).toBeInTheDocument();
    });

    it('displays contact card', () => {
        render(<ContactPage />);
        expect(screen.getByText('contactCard.header')).toBeInTheDocument();
    });

    it('renders NotActiveAlert component', () => {
        render(<ContactPage />);
        expect(screen.getByTestId('not-active-alert-mock')).toBeInTheDocument();
    });

    it('renders contact form', () => {
        render(<ContactPage />);
        expect(screen.getByTestId('contact-form-mock')).toBeInTheDocument();
    });
});
