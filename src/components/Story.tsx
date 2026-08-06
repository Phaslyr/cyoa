import ChoiceButton from "./ChoiceButton"
import type { StoryTracker } from "../models/StoryGraph"
import { PALETTES, themeButtons } from "../theme/theme"

function Story({ storyData: { graph, node }, dispatch }: { storyData: StoryTracker, dispatch: (nextPoint: number) => void }) {
  const THEME = PALETTES["amethyst"] // Default

  const buttonColoring = themeButtons(THEME.buttons, node.branches.length)

  const choiceRow = buttonColoring ? <div className="row pb-3">
        { node.branches.map((branch, i) => (
            <div key={i} className={`col-12 pt-3`}>
              <ChoiceButton text={branch.label} color={buttonColoring[i]} branch={i} dispatch={dispatch} />
            </div> ))}
      </div> : <div className="pb-4" />

  return (
    <div className={`col-10 h-5/6 rounded-4xl px-4 ${THEME.grad} ${THEME.outline} outline-3 outline-offset-3 shadow-[0_0_50px_5px]/85 ${THEME.shadow}`}>
      <h1 className="pt-9 pb-7 text-white text-center text-9xl! max-lg:text-7xl! text-shadow-lg/30 font-bold! tangerine">
        { graph.title }
      </h1>
      <p className="text-white text-lg text-shadow-md/20 georgia story-text">
        { node.text }
      </p>
      { choiceRow }
    </div>
  )
}

export default Story