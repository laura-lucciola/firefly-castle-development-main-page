import './app.scss';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavigationBar from './navigation-bar/navigation-bar';
import HomePage from './home-page/home-page';
import ContactPage from './contact-page/contact-page';

function App() {
    return (
        <div id="app-main" className="app-main">
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
}

export default App;
