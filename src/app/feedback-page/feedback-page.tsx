import { useTranslation } from 'react-i18next';

function FeedbackPage() {
    const { t } = useTranslation();

    return (
        <div>
            <p>{t('common.comingSoon')}</p>
        </div>
    );
}
export default FeedbackPage;
