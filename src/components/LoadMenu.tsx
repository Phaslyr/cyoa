import { StoryGraph } from "../models/StoryGraph"

import defaultStory from "../data/story_theFourthCopy"

import { DEFAULT, BUTTON_COLORS } from "../theme/theme"

const THEME = DEFAULT // Here to instantiate the THEME variable, which will probably end up becoming a togglable setting in Loader

function LoadMenu({ load }: { load: (storyData: StoryGraph) => void }) {
  return (
    <div className={`col-10 min-h-5/6 rounded-4xl px-4 ${THEME.grad} ${THEME.outline} outline-3 outline-offset-3 shadow-[0_0_50px_5px]/85 ${THEME.shadow}`}>
      <div className="p-4 h-full flex justify-content-center align-items-center">
        <button 
          className={`p-4 w-70 rounded-2xl! ${BUTTON_COLORS[THEME.buttonPrimary]} shadow-[0_0_5px_1px]/25 hover:inset-shadow-[0_0_15px_3px]/40 active:inset-shadow-[0_0_20px_4px]/60 shadow-black active:inset-shadow-black flex items-center justify-content-center`}
          onClick={() => { load(defaultStory) }} >
            <span className="m-0 text-white text-3xl text-shadow-sm/15 font-medium georgia">
              Load the Story
            </span>
        </button>
      </div>
    </div>
  )
}

export default LoadMenu