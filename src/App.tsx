import { useReducer } from "react"
import Story from "./components/Story"
import { initializeStory, updateStoryReducer } from "./logic/dungeonMaster"
import type { BranchState } from "./structs/StoryGraph"

function App() {
  const [story, dispatch] = useReducer(updateStoryReducer, initializeStory())

  const makeChoice = (nextPoint: BranchState) => {
    dispatch(nextPoint)
  }

  return (
    <div className="py-5">
      <div className="container flex flex-col justify-center">
        <div className="row align-content-center justify-content-center">
          <Story story={story} dispatch={makeChoice} />
        </div>
      </div>
    </div>
  )
}

export default App
