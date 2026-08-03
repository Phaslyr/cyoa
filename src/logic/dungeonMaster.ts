import { StoryNode, type BranchState } from "../structs/StoryGraph"
import Story from "../data/story_test"

// Functions

export function initializeStory() {
  return Story
}

export function updateStoryReducer(Story: StoryNode, nextBranch: BranchState) {
  return Story.progress(nextBranch)
}