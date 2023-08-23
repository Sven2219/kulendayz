import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEN from './en.json'
import translationHR from './hr.json'

const resources = {
  en: {
    translation: translationEN,
  },
  hr: {
    translation: translationHR,
  },
}

const userLanguage = navigator.language.split('-')[0]

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: userLanguage,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false,
      nestingOptionsSeparator: '.',
    },
  })
  .catch((e) => {
    throw e
  })

export default i18n
