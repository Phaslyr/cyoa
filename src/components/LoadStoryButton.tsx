import { StoryGraph } from "../models/StoryGraph"

import { DEFAULT, BUTTON_COLORS } from "../theme/theme"

const THEME = DEFAULT // Here to instantiate the THEME variable, which will probably end up becoming a togglable setting in Loader

function LoadStoryButton({ story, loadStory }: { story: StoryGraph, loadStory: (storyData: StoryGraph) => void }) {
  return (
    <button 
      className={`container h-1/6 w-full rounded-2xl! ${BUTTON_COLORS[THEME.buttonPrimary]} shadow-[0_0_5px_1px]/25 hover:inset-shadow-[0_0_15px_3px]/40 active:inset-shadow-[0_0_20px_4px]/60 shadow-black active:inset-shadow-black`}
      onClick={() => { loadStory(story) }} >
        <div className="row h-full">
          <span className="col-6 pt-2 self-center justify-self-start text-start text-white lg:text-6xl md:text-5xl text-4xl text-shadow-sm/15 font-bold tangerine">
            { story.title }
          </span>
          <div className="col-6 container">
            <div className="row h-full w-full flex content-center">
              <span className="col-12 justify-self-end text-end text-white lg:text-base text-xs text-shadow-sm/15 italic georgia">
                { story.genre }
              </span>
              <span className="col-12 justify-self-end text-end text-white lg:text-base text-xs text-shadow-sm/15 georgia">
                { story.numNodes } nodes ({ story.endings } endings)
              </span>
            </div>
          </div>
        </div>
    </button>
  )
}

export default LoadStoryButton