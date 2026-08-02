import { useState } from "react"
import Story from "./components/Story"
import { initializeStory, updateStory, type SelectionState } from "./logic/dungeonMaster"

function App() {
  const [story, setStory] = useState(initializeStory)

  const makeChoice = (path: SelectionState) => {
    setStory(updateStory(path))
  }

  return (
    <div className="py-5">
      <div className="container flex flex-col justify-center">
        <div className="row align-content-center justify-content-center">
          <Story text={story.text} choices={story.choices} action={makeChoice} />
        </div>
      </div>
    </div>
  )
}

export default App
