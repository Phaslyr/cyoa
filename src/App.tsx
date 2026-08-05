import { useReducer } from "react"
import Story from "./components/Story"
import { updateStoryReducer } from "./logic/updateStoryReducer"
import storyData from "./data/story_theFourthCopy"

function App() {
  const [loadedStory, dispatch] = useReducer(updateStoryReducer, storyData)

  return (
    <div className="py-5">
      <div className="container flex flex-col justify-center">
        <div className="row align-content-center justify-content-center">
          <Story storyData={loadedStory} dispatch={dispatch} />
        </div>
      </div>
    </div>
  )
}

export default App
