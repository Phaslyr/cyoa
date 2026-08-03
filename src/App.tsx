import { useReducer } from "react"
import Story from "./components/Story"
import { updateStoryReducer } from "./logic/updateStoryReducer"
import story_test from "./data/story_test"

function App() {
  const [loadedStory, dispatch] = useReducer(updateStoryReducer, story_test)

  return (
    <div className="py-5">
      <div className="container flex flex-col justify-center">
        <div className="row align-content-center justify-content-center">
          <Story node={loadedStory} dispatch={dispatch} />
        </div>
      </div>
    </div>
  )
}

export default App
