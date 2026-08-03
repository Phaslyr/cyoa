import { StoryNode } from "../models/StoryGraph"

export function updateStoryReducer(node: StoryNode, nextBranch: number) {
  return node.progress(nextBranch)
}