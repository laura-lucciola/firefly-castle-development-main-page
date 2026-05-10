import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './home-page';

// Mock modules
jest.mock('../company-card/company-card', () => ({
    CompanyCard: () => <div data-testid="company-card-mock">CompanyCard</div>,
}));

jest.mock('../personal-card/personal-card', () => ({
    PersonalCard: () => <div data-testid="personal-card-mock">PersonalCard</div>,
}));

jest.mock('../not-active-alert/not-active-alert', () => ({
    NotActiveAlert: () => <div data-testid="not-active-alert-mock">NotActiveAlert</div>,
}));

describe('HomePage Component', () => {
    it('renders without crashing', () => {
        render(<HomePage />);
        expect(screen.getByTestId('company-card-mock')).toBeInTheDocument();
    });

    it('renders CompanyCard component', () => {
        render(<HomePage />);
        expect(screen.getByTestId('company-card-mock')).toBeInTheDocument();
    });

    it('renders PersonalCard component', () => {
        render(<HomePage />);
        expect(screen.getByTestId('personal-card-mock')).toBeInTheDocument();
    });

    it('renders NotActiveAlert component', () => {
        render(<HomePage />);
        expect(screen.getByTestId('not-active-alert-mock')).toBeInTheDocument();
    });
});
