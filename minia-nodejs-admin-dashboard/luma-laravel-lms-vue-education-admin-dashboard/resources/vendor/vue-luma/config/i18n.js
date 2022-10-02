export const defaultLocale = 'en'
export const fallbackLocale = 'en'

export const locales = [
  { code: 'en', iso: 'en-US', file: 'en.json' },
  { code: 'ro', iso: 'ro-RO', file: 'ro.json' },
]

export const dateTimeFormats = {
  'en-US': {
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }
  },
  'ro-RO': {
    short: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
  }
}

export const numberFormats = {
  'en-US': {
    currency: {
      style: 'currency', currency: 'USD'
    }
  },
  'ro-RO': {
    currency: {
      style: 'currency', currency: 'RON'
    }
  }
}

export default {
  numberFormats,
  dateTimeFormats,
  locales
}