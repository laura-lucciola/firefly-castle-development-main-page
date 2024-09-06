import { Alert } from 'react-bootstrap';
import { useTheme } from '../color-theme/theme-context';
import './not-active-alert.scss';
import { useTranslation } from 'react-i18next';

export function NotActiveAlert() {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const companyName = process.env.REACT_APP_COMPANY_NAME;

    return (
        <div>
            {process.env.REACT_APP_COMPANY_IS_ACTIVE && (
                <Alert variant="info" id="not-active-alert" className={`${theme} not-active-alert`}>
                    <Alert.Heading>{t('notActiveAlert.header', { companyName: companyName })}</Alert.Heading>
                    <p>{t('notActiveAlert.description', { companyName: companyName })}</p>
                </Alert>
            )}
        </div>
    );
}
