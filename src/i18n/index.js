import { createI18n } from 'vue-i18n'
import uz from '../locales/uz.json'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

const defaultLocale = localStorage.getItem('user-locale') || 'uz'

const i18n = createI18n({
  legacy: false, // Set to false to use Composition API
  locale: defaultLocale, // default language
  fallbackLocale: 'en',
  messages: {
    uz,
    ru,
    en
  },
})

export default i18n
