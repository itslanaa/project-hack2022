const hexToRGB = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")"
  }
}

const fonts = { base: "Helvetica Neue" }

// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
const colors = {
  bodyBg: '#F7F8F9',
  border: '#efefef',
  gray: {
    50: '#edeef0',
    100: '#d0d6dc',
    200: '#b2bac4',
    300: '#939fad',
    400: '#7c8a9b',
    500: '#65778a',
    600: '#586879',
    700: '#485563',
    800: '#39424d',
    900: '#272e36'
  },
  primary: {
    50: '#eaecfb',
    100: '#cacef4',
    200: '#a7aeed',
    300: '#838ee5',
    400: '#6773df', // $primary
    500: '#4c59d8',
    600: '#4750cd',
    700: '#3d45c0',
    800: '#363ab4',
    900: '#2a269e'
  },
  success: {
    50: '#ebf7e9',
    100: '#d0eac9',
    200: '#b2dda7',
    300: '#93d183',
    400: '#7cc668', // $success
    500: '#68bc4c',
    600: '#5dac44',
    700: '#509a39',
    800: '#45892f',
    900: '#30691e',
  },
  danger: {
    50: '#ffebf0',
    100: '#ffced6',
    200: '#ff9a9e',
    300: '#ff7077', // $danger
    400: '#ff4853',
    500: '#ff3136',
    600: '#ff2637',
    700: '#f11631',
    800: '#e3082a',
    900: '#d4001d'
  },
  black: '#112b4a',
  white: '#FFFFFF',
  transparent: 'transparent',
  get(color) {
    return color.split('.').reduce((o,i)=>o[i], this)
  }
}

const charts = {
  colorScheme: 'light',
  colors: {
    area: hexToRGB(colors.primary[100], 0.5)
  }
}

const settings = {
  fonts,
  colors,
  charts,
  hexToRGB
}

if (typeof window !== 'undefined') {
  window.settings = settings
}