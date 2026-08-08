import { useState, useReducer } from "react"

import { updateStoryReducer } from "./logic/updateStoryReducer"
import { createBlankStoryTracker, StoryGraph } from "./models/StoryGraph"

import TitleMenu from "./components/TitleMenu"
import LoadMenu from "./components/LoadMenu"
import Story from "./components/Story"

function App() {
  const [renderLoadMenu, setRenderLoadMenu] = useState(false)
  const doRenderLoadMenu = () => { setRenderLoadMenu(true) }

  const [story, updateStory] = useReducer(updateStoryReducer, null, createBlankStoryTracker)
  const loadStory = (graph: StoryGraph) => { updateStory({ type: 'LOAD', payload: graph })}
  const progressStory = (branch: number) => { updateStory({ type: 'PROGRESS', payload: branch })}

  return (
    <div className="container h-min-dvh justify-center py-5">
      <div className="row h-full align-content-center justify-content-center">
        { renderLoadMenu 
          ? ( (story.loaded === false) 
              ? <LoadMenu load={loadStory} /> 
              : <Story storyData={story} progress={progressStory} />) 
          : <TitleMenu toLoad={doRenderLoadMenu}/> }
      </div>
    </div>
  )
}

export default App
