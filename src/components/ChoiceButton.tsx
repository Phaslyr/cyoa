const coloring = {
    "red": "bg-red-600 hover:bg-red-700",
    "orange": "bg-orange-600 hover:bg-orange-700",
    "yellow": "bg-yellow-600 hover:bg-yellow-700",
    "green": "bg-green-600 hover:bg-green-700",
    "blue": "bg-blue-600 hover:bg-blue-700",
    "purple": "bg-purple-600 hover:bg-purple-700",
}

export type Color = keyof typeof coloring

function ChoiceButton({ text, color, branch, dispatch }: { text: string, color: Color, branch: number, dispatch: (nextPoint: number) => void }) {
  return (
    <button 
      className={`p-4 h-full w-100 rounded-2xl! ${coloring[color]} shadow-[0_0_5px_1px]/25 hover:inset-shadow-[0_0_15px_3px]/40 active:inset-shadow-[0_0_20px_4px]/60 shadow-black active:inset-shadow-black flex items-center justify-content-center`} 
      onClick={() => { dispatch(branch) }} >
      <span className="text-white text-xl font-bold m-0">
        { text }
      </span>
    </button>
  )
}

export default ChoiceButton