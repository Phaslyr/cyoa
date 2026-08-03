import { texts, branches } from "./storyTexts"

// Functions

export function initializeStory() {
  return { state: 0, text: texts[0], branches: branches[0] }
}
``
export function updateStory(currentPoint: StoryState, nextPoint: BranchState) {
  if (currentPoint === 0) {
    if (nextPoint === 0) {
      return { state: 1, text: texts[1], branches: branches[1] }
    } else {
      return { state: 2, text: texts[2], branches: branches[1] }
    }
  } else {
    return initializeStory()
  }
}

// Story Tracker

export type StoryState = number
export type BranchState = 0 | 1