// import { useState, useEffect } from 'react'
import './App.css'
import Description from './Description/Description'
import Feedback from './Feedback/Feedback'
import Options from './Options/Options'
import 'modern-normalize'

function App() {
  const optionsButtons = ['good', 'neutral', 'bad']
  // const [feedback, setFeedback] = useState()

  // useEffect(() => {}, [])

  return (
    <>
      <div className="container">
        <div className="backgroundImg">
          <div className="containerImg">
            <Description />
            <Options buttons={optionsButtons} />
            <Feedback />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
