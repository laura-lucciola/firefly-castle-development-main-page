import React from 'react';
import { render, screen } from '@testing-library/react';
import { CompanyCard } from './company-card';

// Mock modules
jest.mock('../color-theme/theme-context', () => ({
    useTheme: () => ({ theme: 'dark' }),
}));

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string, options?: any) => key,
    }),
}));

jest.mock('../../assets/company-logo.svg', () => 'logo.svg');

describe('CompanyCard Component', () => {
    beforeEach(() => {
        delete (process.env as any).REACT_APP_COMPANY_NAME;
        delete (process.env as any).REACT_APP_GITHUB_URL;
        delete (process.env as any).REACT_APP_GITLAB_URL;
        delete (process.env as any).REACT_APP_LINKEDIN_URL;
        delete (process.env as any).REACT_APP_DEV_URL;
    });

    it('renders without crashing', () => {
        const { container } = render(<CompanyCard />);
        expect(container.querySelector('#company-card')).toBeInTheDocument();
    });

    it('displays company card header', () => {
        render(<CompanyCard />);
        expect(screen.getByText('companyCard.header')).toBeInTheDocument();
    });

    it('displays company logo', () => {
        render(<CompanyCard />);
        const image = screen.getByAltText('common.logoAlt');
        expect(image).toBeInTheDocument();
    });

    it('renders social links', () => {
        const { container } = render(<CompanyCard />);
        const links = container.querySelectorAll('a');
        expect(links.length).toBeGreaterThan(0);
    });
});
