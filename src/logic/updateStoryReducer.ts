import { type StoryTracker } from "../models/StoryGraph"

export function updateStoryReducer({ graph, node }: StoryTracker, nextBranch: number): StoryTracker {
  return { graph: graph, node: graph.get(node.progress(nextBranch)) }
}