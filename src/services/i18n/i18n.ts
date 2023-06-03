import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';
import messagesEn from 'resources/translations/messages.en.json';
import messagesFr from 'resources/translations/messages.fr.json';

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
        supportedLngs: ['en', 'fr'],
        interpolation: {
            escapeValue: false,
        },
        detection: {
            order: ['path'],
        },
    })
    .catch(console.error);

export default i18n;
