import css from './Options.module.css'
import clsx from 'clsx'

function Options({ buttons }) {
  return (
    <div className={css.options}>
      {buttons.map((button, idx) => {
        return (
          <button key={idx} className={css.buttons}>
            {button}
          </button>
        )
      })}
      <button className={clsx(css.buttons, css.reset)}>reset</button>
    </div>
  )
}

export default Options
