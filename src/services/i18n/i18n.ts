import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import messagesEn from 'resources/translations/messages.en.json';
import messagesFr from 'resources/translations/messages.fr.json';

export const LOOKUP_QUERY_STRING = 'lang';
export const SUPPORTED_LNGS = ['en', 'fr'];

i18n.use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: messagesEn,
            },
            fr: {
                translation: messagesFr,
            },
        },
        fallbackLng: 'en',
        supportedLngs: SUPPORTED_LNGS,
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['querystring'],
            lookupQuerystring: LOOKUP_QUERY_STRING,
        },
    })
    .catch(console.error);

export default i18n;
