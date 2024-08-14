import Card from 'react-bootstrap/Card';
import { useTheme } from '../color-theme/theme-context';
import './client-feedback-card.scss';
import { useTranslation } from 'react-i18next';

interface ClientFeedbackCardProps {
    clientName: string;
}

const ClientFeedbackCard: React.FC<ClientFeedbackCardProps> = (props: ClientFeedbackCardProps) => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <Card id="client-feedback-card" className={`${theme} client-feedback-card`}>
            <Card.Header id="client-feedback-header">
                <a
                    href={t(`clientFeedbackCard.${props.clientName}.link`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="client-feedback-header"
                    className="card-link client-feedback-header"
                >
                    {t(`clientFeedbackCard.${props.clientName}.header`)}
                </a>
            </Card.Header>
            <Card.Subtitle id="client-feedback-subtitle">
                {t(`clientFeedbackCard.${props.clientName}.subtitle`)}
            </Card.Subtitle>
            <Card.Img
                className="client-feedback-logo-image"
                variant="top"
                src={t(`clientFeedbackCard.${props.clientName}.imageLink`)}
                alt={t('common.logoAlt', { companyName: t(`clientFeedbackCard.${props.clientName}.header`) })}
            />

            <Card.Body>
                <Card.Text id="client-feedback-text">
                    &quot;{t(`clientFeedbackCard.${props.clientName}.description`)}&quot;
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
export default ClientFeedbackCard;
