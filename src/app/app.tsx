import './app.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './color-theme/theme-context';
import MainContent from './main-content';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <MainContent />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
