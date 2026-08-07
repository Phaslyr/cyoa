import { useReducer } from "react"

import Story from "./components/Story"
import Loader from "./components/Loader"

import { updateStoryReducer } from "./logic/updateStoryReducer"

import storyData from "./data/story_theFourthCopy"

function App() {
  // const [loaded, setLoaded] = useState(false)
  const [loadedStory, dispatch] = useReducer(updateStoryReducer, storyData)

  // const loadStory = () => { setLoaded(true) }

  return (
    <div className="">
      <div className="container flex flex-col justify-center py-5">
        <div className="row align-content-center justify-content-center">
          { /* loaded ? <Story...> : <Loader load={loadStory} /> */ }
          <Story storyData={loadedStory} dispatch={dispatch} />
        </div>
      </div>
    </div>
  )
}

export default App
