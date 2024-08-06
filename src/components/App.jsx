import { useState, useEffect } from 'react'
import './App.css'
import 'modern-normalize'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'
import Notification from './Notification/Notification'

export default function App() {
  const optionsButtons = ['good', 'neutral', 'bad']
  const initialFeedback = { good: 0, neutral: 0, bad: 0 }

  const getStorageFeedback = () => {
    const savedFeedback = localStorage.getItem('savedFeedback')
    return savedFeedback !== null ? JSON.parse(savedFeedback) : initialFeedback
  }

  const [feedback, setFeedback] = useState(getStorageFeedback)

  const updateFeedback = (feedbackType) => {
    document.activeElement.blur()

    setFeedback((prev) =>
      feedbackType === 'reset'
        ? initialFeedback
        : { ...prev, [feedbackType]: prev[feedbackType] + 1 }
    )
  }

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad
  const positiveFeedback =
    feedback.good > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0

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
                <Notification />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
