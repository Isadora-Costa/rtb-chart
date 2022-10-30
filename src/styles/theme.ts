import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    black: "#000000",
    white: "#ffffff",
    purple: "#A229B9",
    gray: {
      "300": "#666666",
      "100": "#EDEDED"
    },
    red: {
      "300": "#ED4136",
      "100": "#FFCECB"
    }
  },
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif"
  },
  fontSizes: {
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "4.5xl": "2.75rem"
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600
  },
  lineHeights: {
    "6": "1.5rem",
    "9": "2.25rem",
    "12": "3.375rem"
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      }
    }
  }
})
