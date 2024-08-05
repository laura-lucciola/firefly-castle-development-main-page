import React, { useEffect } from 'react';
import './app.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavigationBar from './navigation-bar/navigation-bar';
import HomePage from './home-page/home-page';
import ContactPage from './contact-page/contact-page';
import { useTheme } from './color-theme/theme-context';
import FeedbackPage from './feedback-page/feedback-page';

const usePageTitle = () => {
    const location = useLocation();

    const appName = process.env.REACT_APP_COMPANY_NAME;

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                document.title = `Home | ${appName}`;
                break;
            case '/feedback':
                document.title = `Feedback | ${appName}`;
                break;
            case '/contact':
                document.title = `Contact | ${appName}`;
                break;
            default:
                document.title = `${appName}`;
        }
    }, [location]);
};

const MainContent: React.FC = () => {
    const { theme } = useTheme();

    usePageTitle(); // Custom hook to set page title

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

export default MainContent;
