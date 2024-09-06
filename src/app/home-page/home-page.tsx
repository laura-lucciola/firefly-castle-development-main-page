import { CompanyCard } from '../company-card/company-card';
import { NotActiveAlert } from '../not-active-alert/not-active-alert';
import { PersonalCard } from '../personal-card/personal-card';

function HomePage() {
    return (
        <div id="home-page" className="home-page">
            <NotActiveAlert></NotActiveAlert>
            <CompanyCard></CompanyCard>
            <PersonalCard></PersonalCard>
        </div>
    );
}
export default HomePage;
