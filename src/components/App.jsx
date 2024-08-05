import { useState, useEffect } from 'react'
import './App.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'

function App() {
  const [feedback, setFeedback] = useState()

  useEffect(() => {}, [])

  return (
    <div>
      <Description />
      <Options />
      <Feedback />
    </div>
  )
}

export default App
