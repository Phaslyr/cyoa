import { StoryGraph } from "../models/StoryGraph"

import defaultStory from "../data/story_theFourthCopy"

import { DEFAULT } from "../theme/theme"
import LoadStoryButton from "./LoadStoryButton"

const THEME = DEFAULT // Here to instantiate the THEME variable, which will probably end up becoming a togglable setting in Loader

function LoadMenu({ load }: { load: (storyData: StoryGraph) => void }) {
  return (
    <div className={`col-10 min-h-5/6 rounded-4xl px-4 ${THEME.grad} ${THEME.outline} outline-3 outline-offset-3 shadow-[0_0_50px_5px]/85 ${THEME.shadow}`}>
      <div className="py-4 h-full">
        <LoadStoryButton story={defaultStory} loadStory={load} />
      </div>
    </div>
  )
}

export default LoadMenu