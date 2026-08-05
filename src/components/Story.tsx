import ChoiceButton from "./ChoiceButton"
import type { StoryTracker } from "../models/StoryGraph"
import type { Color } from "./ChoiceButton"

type Layout = { columns: string, padding: string[], colors: Color[] }

// MAX_BRANCHES === 4 -> StoryGraph.ts
const LAYOUT: Record<number, Layout | undefined> = {
  1: { columns: "col-12",
       padding: [""],
       colors: ["dv"], },
  2: { columns: "col-12",
       padding: ["", "pt-3"],
       colors: ["dv", "mp"], },
  3: { columns: "col-12",
       padding: ["", "pt-3", "pt-3"],
       colors: ["dv", "mv", "mp"], },
  4: { columns: "col-12", 
       padding: ["", "pt-3", "pt-3", "pt-3"],
       colors: ["dv", "mv", "dp", "mp"], },
}

function Story({ storyData: { graph, node }, dispatch }: { storyData: StoryTracker, dispatch: (nextPoint: number) => void }) {
  const layout = LAYOUT[node.branches.length]

  const choiceRow = layout ? <div className="row py-3">
        { node.branches.map((branch, i) => (
            <div key={i} className={`${layout.columns} ${layout.padding[i]}`}>
              <ChoiceButton text={branch.label} color={layout.colors[i]} branch={i} dispatch={dispatch} />
            </div> ))}
      </div> : <div className="pb-4" />

  return (
    <div className="col-10 h-5/6 rounded-4xl px-4 purple-grad outline-purple-700 outline-3 outline-offset-3 shadow-[0_0_50px_5px]/85 shadow-purple-700">
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