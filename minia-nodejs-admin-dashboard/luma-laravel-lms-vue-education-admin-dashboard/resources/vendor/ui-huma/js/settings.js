import { hexToRGB } from './theme-utils'

// https://material.io/design/color/the-color-system.html#tools-for-picking-colors
const colors = {
  plain: {
    gray: '#E3EBF6',
    primary: '#2196F3',
    accent: '#ed0b4b',
    teal: '#00BCC2',
    yellow: '#E4A93C',
    success: '#66BB6A',
    purple: '#824EE1',
    'dodger-blue': '#5567FF',
    'dodger-blue-20': hexToRGB('#5567FF', 0.20),
  },
  darkMode: {
    border: '#19191A',
    bodyBg: '#1D2126'
  },
  gray: {
    300: '#E3EBF6',
    600: '#95AAC9',
    700: '#B1BBC9', // text color
    800: '#152E4D',
    900: '#5B6066' // grid
  },
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90c9f9',
    300: '#63b4f6',
    400: '#42a4f5',
    500: '#2196F3', // $primary
    600: '#1f87e5',
    700: '#1a75d2',
    800: '#1764c0',
    900: '#1045a1'
  },
  accent: {
    50: '#fee3e9',
    100: '#fdb9c8',
    200: '#fa8ca3',
    300: '#f75c7f',
    400: '#f23764',
    500: '#ed0b4b', // primary
    600: '#dd024a',
    700: '#c80047',
    800: '#b40045',
    900: '#920041'
  },
  success: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66BB6A', // $success
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
  },
  purple: {
    500: '#824EE1'
  },
  warning: '#E4A93C',
  black: '#383B3D',
  white: '#FFFFFF',
  transparent: 'transparent'
}

const charts = {
  zeroLineColor: colors.gray[300],
  gridLinesColor: colors.gray[300],
  angleLinesColor: colors.gray[300],
  zeroLineWidth: 1,
  defaultColor: colors.gray[600],
  defaultFontColor: colors.gray[600],
  defaultFontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  defaultFontSize: 13,
  colors: {
    area: hexToRGB(colors.primary[500], 0.24)
  }
}

export const settings = {
  colors,
  charts
}

if (typeof window !== 'undefined') {
  window.settings = settings
}