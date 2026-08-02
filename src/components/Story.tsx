import ChoiceButton from "./ChoiceButton"
import type { SelectionState } from "../logic/dungeonMaster"

function Story(props: { text: string, choices: [string, string], action: (path: SelectionState) => void }) {
  return (
    <div className="col-12 col-md-10 h-5/6 rounded-4xl px-4 purple-grad outline-purple-700 outline-3 outline-offset-3 shadow-[0_0_30px_4px]/75 shadow-purple-700">
      <p className="pt-8  text-white text-lg text-shadow-md/20 story">
        { props.text }
      </p>
      <div className="row py-3">
        <div className="col-6">
          <ChoiceButton text={props.choices[0]} color={'green'} choice={0} action={props.action} />
        </div>
        <div className="col-6">
          <ChoiceButton text={props.choices[1]} color={'red'} choice={1} action={props.action} />
        </div>
      </div>
    </div>
  )
}

export default Story