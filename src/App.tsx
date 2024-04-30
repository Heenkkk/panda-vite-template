import { useState } from 'react'
import { css } from '../styled-system/css'
import { center } from '../styled-system/patterns'

export const App = () => {
  const [isLeft, setIsLeft] = useState(false)
  return (
    <div className={center({ h: 'full', gap: '8', flexDir: 'column' })}>
      <button
        className={css({
          cursor: 'pointer',
          border: '1px solid black',
          padding: '2',
          bg: 'red.700',
        })}
        onClick={() => setIsLeft(!isLeft)}
      >
        Animate
      </button>
      <div
        data-exiting={isLeft ? true : undefined}
        data-entering={isLeft ? undefined : true}
        className={css({
          w: '100px',
          h: '100px',
          bg: 'cyan.500',

          '&[data-entering]': {
            // FIXME: No code completion for animation name
            animationName: 'slideInLeft',
            animationDuration: 'fast',
            animationFillMode: 'forwards',
          },

          '&[data-exiting]': {
            // FIXME: No code completion for animation name
            animationName: 'slideOutLeft',
            animationDuration: 'fast',
            animationFillMode: 'forwards',
          },
        })}
      />
    </div>
  )
}
