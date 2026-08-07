import ChoiceButton from "./ChoiceButton"

import type { StoryTracker } from "../models/StoryGraph"

import { DEFAULT, themeButtons } from "../theme/theme"

const THEME = DEFAULT // Here to instantiate the THEME variable, which will probably end up becoming a togglable setting in Loader

function Story({ storyData: { graph, node }, progress }: { storyData: StoryTracker, progress: (nextPoint: number) => void }) {
  const buttonColoring = themeButtons(THEME.buttons, node.branches.length)

  const choiceRow = buttonColoring ? <div className="row pb-3">
        { node.branches.map((branch, i) => (
            <div key={i} className={`col-12 pt-3`}>
              <ChoiceButton text={branch.label} color={buttonColoring[i]} branch={i} progress={progress} />
            </div> ))}
      </div> : <div className="pb-4" />

  return (
    <div className={`col-10 min-h-5/6 rounded-4xl px-4 ${THEME.grad} ${THEME.outline} outline-3 outline-offset-3 shadow-[0_0_50px_5px]/85 ${THEME.shadow}`}>
      <h1 className="pt-9 pb-7 text-white text-center text-9xl! max-lg:text-7xl! text-shadow-lg/30 font-bold! tangerine">
        { graph.title }
      </h1>
      <p className="text-white text-lg text-shadow-md/20 georgia pre-line">
        { node.text }
      </p>
      { choiceRow }
    </div>
  )
}

export default Story