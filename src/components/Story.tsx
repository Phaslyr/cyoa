import ChoiceButton from "./ChoiceButton"
import type { BranchState, StoryState } from "../logic/dungeonMaster"

function Story(props: { text: string, state: number, branches: [string, string], dispatch: (currentPoint: StoryState, nextPoint: BranchState) => void }) {
  return (
    <div className="col-12 col-md-10 h-5/6 rounded-4xl px-4 purple-grad outline-purple-700 outline-3 outline-offset-3 shadow-[0_0_30px_4px]/75 shadow-purple-700">
      <p className="pt-8  text-white text-lg text-shadow-md/20 story">
        { props.text }
      </p>
      <div className="row py-3">
        <div className="col-6">
          <ChoiceButton text={props.branches[0]} color={'green'} state={props.state} branch={0} dispatch={props.dispatch} />
        </div>
        <div className="col-6">
          <ChoiceButton text={props.branches[1]} color={'red'} state={props.state} branch={1} dispatch={props.dispatch} />
        </div>
      </div>
    </div>
  )
}

export default Story