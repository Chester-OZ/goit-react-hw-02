import css from './Options.module.css'
import clsx from 'clsx'

export default function Options({ buttons, updateFeedback, total }) {
  return (
    <div className={css.options}>
      {buttons.map((button, idx) => {
        return (
          <button
            onClick={() => updateFeedback(button)}
            key={idx}
            className={css.buttons}
          >
            {button}
          </button>
        )
      })}
      {total > 0 && (
        <button
          onClick={() => updateFeedback('reset')}
          className={clsx(css.buttons, css.reset)}
        >
          reset
        </button>
      )}
    </div>
  )
}
