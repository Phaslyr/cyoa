import { useState, useReducer } from "react"

import Story from "./components/Story"
import StartMenu from "./components/StartMenu"

import { updateStoryReducer } from "./logic/updateStoryReducer"

import storyData from "./data/story_theFourthCopy"

function App() {
  const [start, setStart] = useState(false)
  const [loadedStory, dispatch] = useReducer(updateStoryReducer, storyData)

  const setStartTrue = () => { setStart(true) }

  return (
    <div className="container h-min-dvh justify-center py-5">
      <div className="row h-full align-content-center justify-content-center">
        { start ? <Story storyData={loadedStory} dispatch={dispatch} /> : <StartMenu init={setStartTrue}/> }
      </div>
    </div>
  )
}

export default App
