import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import English from './english.json';
import Portuguese from './portuguese.json';

const resources = {
    'en-GB': {
        translation: English,
    },
    'pt-BR': {
        translation: Portuguese,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        debug: true,
        fallbackLng: 'en-GB',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
