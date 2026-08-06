// All Palettes
// Note: MAX_BRANCHES === 4 -> StoryGraph.ts

type Palette = {
  1?: readonly [Color]
  2?: readonly [Color, Color]
  3?: readonly [Color, Color, Color]
  4?: readonly [Color, Color, Color, Color]
}

const AMETHYST: Palette = {
  1: ["dark-violet"],
  2: ["dark-violet", "med-purple"],
  3: ["dark-violet", "med-violet", "med-purple"],
  4: ["dark-violet", "med-violet", "dark-purple", "med-purple"],
}

// Exports

export const TW_BUTTON_COLORS = {
    "med-violet": "bg-violet-500 hover:bg-violet-600",
    "dark-violet": "bg-violet-600 hover:bg-violet-800",
    "med-purple": "bg-purple-500 hover:bg-purple-600",
    "dark-purple": "bg-purple-600 hover:bg-purple-800",
}

export const PALETTES = {
  amethyst: {
    grad: "amethyst-grad",
    outline: "outline-amethyst",
    shadow: "shadow-amethyst",
    buttons: AMETHYST,
  },
}

export function themeButtons(p: Palette, n: number): readonly Color[] | undefined {
  return (p as Record<number, readonly Color[] | undefined>)[n]
}

export type Color = keyof typeof TW_BUTTON_COLORS
export type Theme = keyof typeof PALETTES // for later