function ChoiceButton(props: { text: string }) {
  return (
    <button className="p-4 h-full w-100 rounded-2xl! bg-indigo-800 hover:bg-indigo-700 shadow-[0_0_5px_1px]/25 hover:inset-shadow-[0_0_10px_2px]/25 active:inset-shadow-[0_0_15px_3px]/50 shadow-black active:inset-shadow-black flex items-center justify-content-center">
      <span className="text-white text-xl m-0">
        { props.text }
      </span>
    </button>
  )
}

export default ChoiceButton