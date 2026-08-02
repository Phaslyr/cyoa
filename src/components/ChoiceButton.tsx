import type { SelectionState } from "../logic/dungeonMaster"

type Color = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple'

const coloring = {
    'red': ["bg-red-600", "hover:bg-red-700"],
    'orange': ["bg-orange-600", "hover:bg-orange-700"],
    'yellow': ["bg-yellow-600", "hover:bg-yellow-700"],
    'green': ["bg-green-600", "hover:bg-green-700"],
    'blue': ["bg-blue-600", "hover:bg-blue-700"],
    'purple': ["bg-purple-600", "hover:bg-purple-700"],
}

function ChoiceButton(props: { text: string, color: Color, choice: SelectionState, action: (path: SelectionState) => void }) {
  return (
    <button 
      className={`p-4 h-full w-100 rounded-2xl! ${coloring[props.color][0]} ${coloring[props.color][1]} shadow-[0_0_5px_1px]/25 hover:inset-shadow-[0_0_15px_3px]/40 active:inset-shadow-[0_0_20px_4px]/60 shadow-black active:inset-shadow-black flex items-center justify-content-center`} 
      onClick={() => { props.action(props.choice) }} >
      <span className="text-white text-xl m-0">
        { props.text }
      </span>
    </button>
  )
}

export default ChoiceButton