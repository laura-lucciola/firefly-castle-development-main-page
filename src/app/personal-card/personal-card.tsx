import Card from 'react-bootstrap/Card';
import { useTheme } from '../color-theme/theme-context';
import './personal-card.scss';
import { useTranslation } from 'react-i18next';

export function PersonalCard() {
    const { theme } = useTheme();
    
    const { t } = useTranslation();

    return (
        <Card id="who-am-i-card" className={`${theme} who-am-i-card`}>
            <Card.Header id="who-am-i-header">{t('personalCard.header')}</Card.Header>
            <Card.Subtitle id="who-am-i-subtitle">{t('personalCard.subtitle')}</Card.Subtitle>
            <Card.Body>
                <Card.Text id="who-am-i-text">{t('personalCard.description')}</Card.Text>
            </Card.Body>
        </Card>
    );
}