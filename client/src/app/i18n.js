import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

export const supportedLanguages = [
    { code: 'en', name: 'English' },
    { code: 'tr', name: 'Türkçe' },
    { code: 'jp', name: '日本語' }
];

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    displayWarning: 'CONTENT IS BEST DISPLAYED IN PORTRAIT ORIENTATION IN CURRENT RESOLUTION',

                    landing: {
                        title: 'INTERACT WITH RIDERS LIKE YOU AND PLAN YOUR NEXT TRAIL!',
                        start: 'GET STARTED — IT\'S FREE!',
                        CTA1: 'NAVIGATE TO LEARN MORE',
                        CTA2: 'OR START YOUR JOURNEY NOW'
                    },

                    signin: {
                        title: 'WELCOME BACK!',
                        option1: 'Sign in using your credentials',
                        option2: 'or continue with',
                        email: 'Username or email',
                        password: 'Password',
                        signin: 'SIGN IN',
                        terms: 'BY SIGNING IN, YOU AGREE TO OUR TERMS AND CONDITIONS AND PRIVACY POLICY.',
                        help: 'NEED HELP SIGNING IN?',
                        signupTitle: 'NOT ON TRAILTRACER YET?',
                        explanation: 'You can still explore everything the community has created. But you will need an account to interact with them.',
                        signup: 'SIGN UP'
                    }
                }
            },

            tr: {
                translation: {
                    displayWarning: 'BU ÇÖZÜNÜRLÜKTE İÇERİK EN İYİ PORTRE MODUNDA SERGİLENİR',

                    landing: {
                        title: 'SENİN GİBİ SÜRÜCÜLERLE ETKİLEŞİME GİR VE BİR SONRAKİ ROTANI PLANLA!',
                        start: 'BAŞLA — TAMAMEN ÜCRETSİZ!',
                        CTA1: 'DAHA FAZLA BİLGİ İÇİN GEZİN',
                        CTA2: 'VEYA ŞİMDİ YOLCULUĞUNA BAŞLA'
                    },

                    signin: {
                        title: 'TEKRAR HOŞGELDİN!',
                        option1: 'Bilgilerinizle giriş yapın',
                        option2: 'veya',
                        email: 'Kullanıcı adı veya e-posta adresi',
                        password: 'Şifre',
                        signin: 'GİRİŞ YAP',
                        terms: 'GİRİŞ YAPARAK, KULLANIM KOŞULLARIMIZI VE GİZLİLİK POLİTİKAMIZI KABUL EDERSİNİZ.',
                        help: 'GİRİŞ YAPARKEN YARDIMA MI İHTİYACINIZ VAR?',
                        signupTitle: 'HENÜZ TRAILTRACER\'DA DEĞİL MİSİN?',
                        explanation: 'Yine de topluluğun oluşturduğu her şeyi keşfedebilirsin. Ama onlarla etkileşim kurmak için bir hesabın olması gerekiyor.',
                        signup: 'KAYDOL'
                    }
                }
            },

            jp: {
                translation: {
                    landing: {
                        title: 'あなたのようなライダーと交流して、次のトレイルを計画しましょう！',
                        start: 'スタート — 無料です！',
                        CTA1: '詳細を確認するにはナビゲートしてください',
                        CTA2: 'または、今すぐあなたの旅を始めてください'
                    }
                }
            }
        }
    });

export default i18n;