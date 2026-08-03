import ChoiceButton from "./ChoiceButton"
import type { BranchState, StoryNode } from "../structs/StoryGraph"

function Story(props: { story: StoryNode, dispatch: (nextPoint: BranchState) => void }) {
  let choiceRow = <></>;

  if (props.story.branches.length === 2) {
    choiceRow = <>
      <div className="col-6">
        <ChoiceButton text={props.story.branches[0].text} color={'green'} branch={0} dispatch={props.dispatch} />
      </div>
      <div className="col-6">
        <ChoiceButton text={props.story.branches[1].text} color={'red'} branch={1} dispatch={props.dispatch} />
      </div>
    </>
  } else if (props.story.branches.length === 3) {
    choiceRow = <>
      <div className="col-md-4 col-12">
        <ChoiceButton text={props.story.branches[0].text} color={'green'} branch={0} dispatch={props.dispatch} />
      </div>
      <div className="col-md-4 col-12 max-md:pt-4">
        <ChoiceButton text={props.story.branches[1].text} color={'yellow'} branch={1} dispatch={props.dispatch} />
      </div>
      <div className="col-md-4 col-12 max-md:pt-4">
        <ChoiceButton text={props.story.branches[2].text} color={'red'} branch={2} dispatch={props.dispatch} />
      </div>
    </>
  } else if (props.story.branches.length === 4) {
    choiceRow = <>
      <div className="col-6">
        <ChoiceButton text={props.story.branches[0].text} color={'green'} branch={0} dispatch={props.dispatch} />
      </div>
      <div className="col-6">
        <ChoiceButton text={props.story.branches[1].text} color={'red'} branch={1} dispatch={props.dispatch} />
      </div>
      <div className="col-6 pt-4">
        <ChoiceButton text={props.story.branches[2].text} color={'yellow'} branch={2} dispatch={props.dispatch} />
      </div>
      <div className="col-6 pt-4">
        <ChoiceButton text={props.story.branches[3].text} color={'blue'} branch={3} dispatch={props.dispatch} />
      </div>
    </>
  }

  return (
    <div className="col-12 col-md-10 h-5/6 rounded-4xl px-4 purple-grad outline-purple-700 outline-3 outline-offset-3 shadow-[0_0_30px_4px]/75 shadow-purple-700">
      <p className="pt-8  text-white text-lg text-shadow-md/20 story">
        { props.story.text }
      </p>
      <div className="row py-3">
        { choiceRow }
      </div>
    </div>
  )
}

export default Story