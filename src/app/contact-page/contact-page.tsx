import { useTranslation } from 'react-i18next';

function ContactPage() {
    const { t } = useTranslation();

    return (
        <div>
            <p>{t('common.comingSoon')}</p>
        </div>
    );
}
export default ContactPage;
