import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * i18n configuration
 */
i18n
    .use(ChainedBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        nonExplicitSupportedLngs: true,
        fallbackLng: 'en',
        load: 'languageOnly',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            useSuspense: true,
        },
        backend: {
            backends: [
                LocalStorageBackend,
                HttpApi
            ],
            backendOptions: [{
                prefix: 'i18next-',
                expirationTime: 7 * 24 * 60 * 60
            }, {
                loadPath: '/locales/{{lng}}/{{ns}}.json'
            }]
        },
        detection: {
            order: ['localStorage', 'navigator'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage']
        }
    });

i18n.supportedLanguages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'jp', name: '日本語' },
    { code: 'es', name: 'Español' }
];

export default i18n;