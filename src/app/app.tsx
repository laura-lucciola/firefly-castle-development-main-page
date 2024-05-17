import './app.scss';
import { PersonalCard } from './personal-card/personal-card';
import { CompanyCard } from './company-card/company-card';

function App() {
    return (
            <div id="main-body" className="main-body">
                <CompanyCard></CompanyCard>
    
    <PersonalCard></PersonalCard>
        </div>
        
    );
}

export default App;
