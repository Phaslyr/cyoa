const coloring = {
    "lv": "bg-violet-400 hover:bg-violet-500",
    "mv": "bg-violet-500 hover:bg-violet-600",
    "dv": "bg-violet-600 hover:bg-violet-800",
    "lp": "bg-purple-400 hover:bg-purple-500",
    "mp": "bg-purple-500 hover:bg-purple-600",
    "dp": "bg-purple-600 hover:bg-purple-800",
}

export type Color = keyof typeof coloring

function ChoiceButton({ text, color, branch, dispatch }: { text: string, color: Color, branch: number, dispatch: (nextPoint: number) => void }) {
  return (
    <button 
      className={`p-4 h-full w-100 rounded-2xl! ${coloring[color]} shadow-[0_0_5px_1px]/25 hover:inset-shadow-[0_0_15px_3px]/40 active:inset-shadow-[0_0_20px_4px]/60 shadow-black active:inset-shadow-black flex items-center justify-content-center`} 
      onClick={() => { dispatch(branch) }} >
      <span className="m-0 text-white text-xl text-shadow-sm/15 font-medium georgia">
        { text }
      </span>
    </button>
  )
}

export default ChoiceButton