import { CompanyCard } from '../company-card/company-card';
import { PersonalCard } from '../personal-card/personal-card';

function HomePage() {
    return (
        <div id="home-page">
            <CompanyCard></CompanyCard>
            <PersonalCard></PersonalCard>
        </div>
    );
}
export default HomePage;
