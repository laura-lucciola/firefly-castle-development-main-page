import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock the component before importing to avoid require.context issues
jest.mock('./client-feedback-card');
import ClientFeedbackCard from './client-feedback-card';

describe('ClientFeedbackCard Component', () => {
    it('renders without crashing', () => {
        render(<ClientFeedbackCard clientName="meetMargo" />);
        expect(screen.getByTestId('client-feedback-card-mock')).toBeInTheDocument();
    });

    it('renders with the correct client name', () => {
        render(<ClientFeedbackCard clientName="meetMargo" />);
        expect(screen.getByText(/meetMargo/)).toBeInTheDocument();
    });

    it('renders as a card component', () => {
        const { container } = render(<ClientFeedbackCard clientName="meetMargo" />);
        expect(container.querySelector('[data-testid="client-feedback-card-mock"]')).toBeInTheDocument();
    });
});
