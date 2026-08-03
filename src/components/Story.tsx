import ChoiceButton from "./ChoiceButton"
import type { BranchState, StoryNode } from "../structs/StoryGraph"

function Story({ story, dispatch }: { story: StoryNode, dispatch: (nextPoint: BranchState) => void }) {
  let choiceRow = <div className="pb-4"></div>;

  if (story.branches.length === 2) {
    choiceRow = <div className="row py-3">
      <div className="col-6">
        <ChoiceButton text={story.branches[0].label} color={'green'} branch={0} dispatch={dispatch} />
      </div>
      <div className="col-6">
        <ChoiceButton text={story.branches[1].label} color={'red'} branch={1} dispatch={dispatch} />
      </div>
    </div>
  } else if (story.branches.length === 3) {
    choiceRow = <div className="row py-3">
      <div className="col-md-4 col-12">
        <ChoiceButton text={story.branches[0].label} color={'green'} branch={0} dispatch={dispatch} />
      </div>
      <div className="col-md-4 col-12 max-md:pt-4">
        <ChoiceButton text={story.branches[1].label} color={'yellow'} branch={1} dispatch={dispatch} />
      </div>
      <div className="col-md-4 col-12 max-md:pt-4">
        <ChoiceButton text={story.branches[2].label} color={'red'} branch={2} dispatch={dispatch} />
      </div>
    </div>
  } else if (story.branches.length === 4) {
    choiceRow = <div className="row py-3">
      <div className="col-6">
        <ChoiceButton text={story.branches[0].label} color={'green'} branch={0} dispatch={dispatch} />
      </div>
      <div className="col-6">
        <ChoiceButton text={story.branches[1].label} color={'red'} branch={1} dispatch={dispatch} />
      </div>
      <div className="col-6 pt-4">
        <ChoiceButton text={story.branches[2].label} color={'yellow'} branch={2} dispatch={dispatch} />
      </div>
      <div className="col-6 pt-4">
        <ChoiceButton text={story.branches[3].label} color={'blue'} branch={3} dispatch={dispatch} />
      </div>
    </div>
  }

  return (
    <div className="col-12 col-md-10 h-5/6 rounded-4xl px-4 purple-grad outline-purple-700 outline-3 outline-offset-3 shadow-[0_0_30px_4px]/75 shadow-purple-700">
      <p className="pt-8 text-white text-lg text-shadow-md/20 story">
        { story.text }
      </p>
      { choiceRow }
    </div>
  )
}

export default Story