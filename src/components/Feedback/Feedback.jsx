import css from './Feedback.module.css'

function Feedback({ feedback: { good, neutral, bad }, total, positive }) {
  const feedback = [
    { label: 'Good', value: good },
    { label: 'Neutral', value: neutral },
    { label: 'Bad', value: bad },
  ]
  return (
    <div>
      <ul className={css.list}>
        {feedback.map((item, idx) => {
          return (
            <li className={css.text} key={idx}>
              <p>
                {item.label}: <span>{item.value}</span>
              </p>
            </li>
          )
        })}
      </ul>
      <div className={css.textTitle}>
        <p>Total: {total}</p>
        <p>
          Positive:{' '}
          {positive > 0 ? (
            <span className={css.textPositive}>{positive}%</span>
          ) : (
            ''
          )}
        </p>
      </div>
    </div>
  )
}

export default Feedback
