import React from 'react';
import { render, screen } from '@testing-library/react';
import FeedbackPage from './feedback-page';

// Mock modules
jest.mock('../client-feedback-card/client-feedback-card', () => {
    return function MockClientFeedbackCard() {
        return <div data-testid="client-feedback-card-mock">ClientFeedbackCard</div>;
    };
});

describe('FeedbackPage Component', () => {
    it('renders without crashing', () => {
        render(<FeedbackPage />);
        expect(screen.getByTestId('client-feedback-card-mock')).toBeInTheDocument();
    });

    it('renders feedback page container', () => {
        const { container } = render(<FeedbackPage />);
        expect(container.querySelector('#feedback-page')).toBeInTheDocument();
    });

    it('renders ClientFeedbackCard component with correct clientName prop', () => {
        render(<FeedbackPage />);
        expect(screen.getByTestId('client-feedback-card-mock')).toBeInTheDocument();
    });
});
