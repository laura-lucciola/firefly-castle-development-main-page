import './app.scss';
import '../locales/i18n';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './color-theme/theme-context';
import Navigator from './navigator';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Navigator />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
