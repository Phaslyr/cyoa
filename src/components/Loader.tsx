import { DEFAULT, TW_BUTTON_COLORS } from "../theme/theme"

const THEME = DEFAULT // Here to instantiate the THEME variable, which will probably end up becoming a togglable setting in Loader

// load argument
function Loader() {
  return (
    <div className={`col-10 h-1/2 rounded-4xl px-4 ${THEME.grad} ${THEME.outline} outline-3 outline-offset-3 shadow-[0_0_50px_5px]/85 ${THEME.shadow}`}>
      <h1 className="pt-9 pb-3 text-white text-center text-9xl! max-lg:text-7xl! text-shadow-lg/30 font-bold! tangerine pre-wrap">
        C  Y  O  A
      </h1>
      <p className="text-white text-center text-5xl text-shadow-md/20 tangerine">
        The interactive platform for reading complex, in-depth choose-your-own-adventure stories online!
      </p>
      { /* Some sort of flourishy break line could fit here */ }
      { /* We'll also want a place to enter a code and load a story */ }
      <div className="pt-2 pb-4 flex justify-content-center">
        <button 
          className={`p-4 h-full w-60 rounded-2xl! ${TW_BUTTON_COLORS["dark-violet"]} shadow-[0_0_5px_1px]/25 hover:inset-shadow-[0_0_15px_3px]/40 active:inset-shadow-[0_0_20px_4px]/60 shadow-black active:inset-shadow-black flex items-center justify-content-center`}
          /* onClick={load} */>
            <span className="m-0 text-white text-3xl text-shadow-sm/15 font-medium georgia">
              Begin
            </span>
        </button>
      </div>
    </div>
  )
}

export default Loader