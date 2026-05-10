import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import ContactForm from './contact-form';
import { ContactFormValues } from './contact-form-values';

// Mock modules
vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('ContactForm Component', () => {
    const mockOnSubmit = vi.fn();

    beforeEach(() => {
        mockOnSubmit.mockClear();
    });

    it('renders without crashing', () => {
        const { container } = render(<ContactForm onSubmit={mockOnSubmit} />);
        expect(container.querySelector('form')).toBeInTheDocument();
    });

    it('renders email input field', () => {
        render(<ContactForm onSubmit={mockOnSubmit} />);
        const emailInput = screen.getByPlaceholderText('contactForm.emailAddress.placeholder');
        expect(emailInput).toBeInTheDocument();
    });

    it('renders subject input field', () => {
        render(<ContactForm onSubmit={mockOnSubmit} />);
        const subjectInput = screen.getByPlaceholderText('contactForm.emailSubject.placeholder');
        expect(subjectInput).toBeInTheDocument();
    });

    it('renders message textarea field', () => {
        render(<ContactForm onSubmit={mockOnSubmit} />);
        const messageInput = screen.getByPlaceholderText('contactForm.message.placeholder');
        expect(messageInput).toBeInTheDocument();
    });

    it('renders submit button', () => {
        render(<ContactForm onSubmit={mockOnSubmit} />);
        const submitButton = screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
    });

    it('calls onSubmit when form is submitted with valid data', async () => {
        render(<ContactForm onSubmit={mockOnSubmit} />);
        const emailInput = screen.getByPlaceholderText('contactForm.emailAddress.placeholder');
        const subjectInput = screen.getByPlaceholderText('contactForm.emailSubject.placeholder');
        const messageInput = screen.getByPlaceholderText('contactForm.message.placeholder');
        const submitButton = screen.getByRole('button');

        await userEvent.type(emailInput, 'test@example.com');
        await userEvent.type(subjectInput, 'Test Subject');
        await userEvent.type(messageInput, 'Test message');
        await userEvent.click(submitButton);

        expect(mockOnSubmit).toHaveBeenCalled();
    });
});
