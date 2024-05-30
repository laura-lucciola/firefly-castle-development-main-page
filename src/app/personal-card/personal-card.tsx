import Card from 'react-bootstrap/Card';
import { useTheme } from '../color-theme/theme-context';
import './personal-card.scss';

export function PersonalCard() {
    const { theme } = useTheme();

    return (
        <Card id="who-am-i-card" className={`${theme} who-am-i-card`}>
            <Card.Header id="who-am-i-header">Who am I?</Card.Header>
            <Card.Subtitle id="who-am-i-subtitle">Laura Lucciola</Card.Subtitle>
            <Card.Body>
                <Card.Text id="who-am-i-text">
                    Driven Senior Software Engineer on a continuous journey for growth. An adaptable, hard-working,
                    organized, and reliable software engineer eager to learn from other cultures and people from
                    different backgrounds. I am passionate about using technology to improve people's lives and enhance
                    my skills in the process.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
