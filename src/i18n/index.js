import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import sk from './locales/sk.json';
import hu from './locales/hu.json';
import de from './locales/de.json';
import es from './locales/es.json';
import pt from './locales/pt.json';
import fr from './locales/fr.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sk: { translation: sk },
      hu: { translation: hu },
      de: { translation: de },
      es: { translation: es },
      pt: { translation: pt },
      fr: { translation: fr },
      ru: { translation: ru },
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'sk', 'hu', 'de', 'es', 'pt', 'fr', 'ru'],
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
