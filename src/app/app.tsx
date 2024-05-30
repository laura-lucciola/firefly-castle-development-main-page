import React from 'react';
import './app.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavigationBar from './navigation-bar/navigation-bar';
import HomePage from './home-page/home-page';
import ContactPage from './contact-page/contact-page';
import { ThemeProvider, useTheme } from './color-theme/theme-context';

const MainContent: React.FC = () => {
    const { theme } = useTheme();

    return (
        <div id="app-main" className={`app-main ${theme}`}>
            <NavigationBar />
            <div id="main-body" className="main-body">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
};

function App() {
    return (
        <ThemeProvider>
            <MainContent />
        </ThemeProvider>
    );
}

export default App;
