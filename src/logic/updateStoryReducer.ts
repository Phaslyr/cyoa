import { type StoryTracker, StoryGraph } from "../models/StoryGraph"

type UpdateStoryReducerAction = 
  | { type: 'LOAD', payload: StoryGraph }
  | { type: 'PROGRESS', payload: number }

export function updateStoryReducer(state: StoryTracker, action: UpdateStoryReducerAction): StoryTracker {
  switch (action.type) {
    case "LOAD":
      return { graph: action.payload, node: action.payload.root, loaded: true }
    case "PROGRESS":
      if (state.loaded === false) {
        throw new Error("Server Error: Story not loaded")
      }
      return { ...state, node: state.graph.get(state.node.progress(action.payload)) }
  }  
}