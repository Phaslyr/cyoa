import ChoiceButton from "./ChoiceButton"
import type { StoryNode } from "../models/StoryGraph"
import type { Color } from "./ChoiceButton"

type Layout = { columns: string, padding: string[], colors: Color[] }

// MAX_BRANCHES === 4 -> StoryGraph.ts
const LAYOUT: Record<number, Layout | undefined> = {
  1: { columns: "col-12",
       padding: [""],
       colors: ["blue"], },
  2: { columns: "col-6",
       padding: ["", ""],
       colors: ["green", "red"], },
  3: { columns: "col-12 col-md-4",
       padding: ["", "max-md:pt-4", "max-md:pt-4"],
       colors: ["green", "yellow", "red"], },
  4: { columns: "col-6", 
       padding: ["", "", "pt-4", "pt-4"],
       colors: ["green", "red", "yellow", "blue"], },
}

function Story({ node, dispatch }: { node: StoryNode, dispatch: (nextPoint: number) => void }) {
  const layout = LAYOUT[node.branches.length]

  const choiceRow = layout ? <div className="row py-3">
        { node.branches.map((branch, i) => (
            <div key={i} className={`${layout.columns} ${layout.padding[i]}`}>
              <ChoiceButton text={branch.label} color={layout.colors[i]} branch={i} dispatch={dispatch} />
            </div> ))}
      </div> : <div className="pb-4" />

  return (
    <div className="col-10 h-5/6 rounded-4xl px-4 purple-grad outline-purple-700 outline-3 outline-offset-3 shadow-[0_0_30px_4px]/75 shadow-purple-700">
      <p className="pt-8 text-white text-lg text-shadow-md/20 story-text">
        { node.text }
      </p>
      { choiceRow }
    </div>
  )
}

export default Story