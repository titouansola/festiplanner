import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './resources/fr.json';

i18n.use(initReactI18next).init({
  debug: process.env.NODE_ENV !== 'production',
  lng: 'fr',
  resources: {
    fr: {
      translation: fr,
    },
  },
});

export default i18n;
