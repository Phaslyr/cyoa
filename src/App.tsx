import { useState } from "react"
import Story from "./components/Story"
import { initializeStory, updateStory, type StoryState, type BranchState } from "./logic/dungeonMaster"

function App() {
  const [story, setStory] = useState(initializeStory)

  const makeChoice = (currentPoint: StoryState, nextPoint: BranchState) => {
    setStory(updateStory(currentPoint, nextPoint))
  }

  return (
    <div className="py-5">
      <div className="container flex flex-col justify-center">
        <div className="row align-content-center justify-content-center">
          <Story text={story.text} state={story.state} branches={story.branches} dispatch={makeChoice} />
        </div>
      </div>
    </div>
  )
}

export default App
