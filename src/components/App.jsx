import { useState, useEffect } from 'react'
import './App.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'
import 'modern-normalize'

function App() {
  const optionsButtons = ['good', 'neutral', 'bad']
  const declarationFeedback = { good: 0, neutral: 0, bad: 0 }

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('savedFeedback')
    return savedFeedback !== null
      ? JSON.parse(savedFeedback)
      : declarationFeedback
  })

  const updateFeedback = (feedbackType) => {
    document.activeElement.blur()

    if (feedbackType === 'reset') {
      setFeedback(declarationFeedback)
    } else {
      setFeedback((prev) => ({
        ...prev,
        [feedbackType]: prev[feedbackType] + 1,
      }))
    }
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100)

  useEffect(() => {
    localStorage.setItem('savedFeedback', JSON.stringify(feedback))
  }, [feedback])

  return (
    <>
      <div className="container">
        <div className="backgroundImg">
          <div className="containerImg">
            <Description />
            <Options
              buttons={optionsButtons}
              updateFeedback={updateFeedback}
              total={totalFeedback}
            />
            <div>
              {totalFeedback > 0 ? (
                <Feedback
                  feedback={feedback}
                  total={totalFeedback}
                  positive={positiveFeedback}
                />
              ) : (
                <p className="noFeedback">No feedback yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
