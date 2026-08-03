import { texts, branches } from "./storyTexts"
import type { StoryNode, StoryState, BranchState } from "../structs/StoryGraph"

// Functions

export function initializeStory() {
  return { state: 0, text: texts[0], branches: branches[0] }
}

export function updateStoryReducer(state: StoryNode, action: BranchState) {
  return updateStory(state.state, action)
}

function updateStory(currentPoint: StoryState, nextPoint: BranchState) {
  if (currentPoint === 0) {
    if (nextPoint === 0) {
      return { state: 1, text: texts[1], branches: branches[1] }
    } else {
      return { state: 2, text: texts[2], branches: branches[2] }
    }
  } else {
    return initializeStory()
  }
}