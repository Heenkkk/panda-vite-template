import { defineKeyframes } from '@pandacss/dev'

/**
 * Example keyframes by animated-pandacss (https://github.com/anubra266/animated-pandacss)
 */
export const keyframes = defineKeyframes({
  slideInLeft: {
    '0%': {
      transform: 'translate3d(-100%, 0, 0)',
      visibility: 'visible',
    },
    to: { transform: 'translateZ(0)' },
  },
  slideOutLeft: {
    '0%': { transform: 'translateZ(0)' },
    to: {
      visibility: 'hidden',
      transform: 'translate3d(-100%, 0, 0)',
    },
  },
})
