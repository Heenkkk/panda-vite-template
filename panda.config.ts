import { defineConfig } from '@pandacss/dev'
import { recipes } from './theme/recipes'
import { semanticTokens, tokens } from './theme/tokens'
import { keyframes } from './theme/keyframes'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: { tokens, semanticTokens, recipes, keyframes },
  },
  globalCss: {
    'html, body': {
      color: 'text.main',
      backgroundColor: 'bg.main',
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // The JSX framework to use
  jsxFramework: 'react',
})
