import React, { useEffect } from 'react';
import './app.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './navigation-bar/navigation-bar';
import HomePage from './home-page/home-page';
import ContactPage from './contact-page/contact-page';
import { useTheme } from './color-theme/theme-context';
import FeedbackPage from './feedback-page/feedback-page';
import { useTranslation } from 'react-i18next';

interface TitleMapping {
    [key: string]: string;
}

const usePageTitle = () => {
    const location = useLocation();
    const { t } = useTranslation();
    const appName = process.env.REACT_APP_COMPANY_NAME ?? 'Company Name';

    useEffect(() => {
        const titles: TitleMapping = {
            '/': `${t('navigationBar.home')} | ${appName}`,
            '/feedback': `${t('navigationBar.feedback')} | ${appName}`,
            '/contact': `${t('navigationBar.contact')} | ${appName}`,
        };

        document.title = titles[location.pathname] || appName;
    }, [appName, location]);
};

const Navigator: React.FC = () => {
    const { theme } = useTheme();

    usePageTitle();

    return (
        <div id="app-main" className={`app-main ${theme}`}>
            <NavigationBar />
            <div id="main-body" className="main-body">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/feedback" element={<FeedbackPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default Navigator;
