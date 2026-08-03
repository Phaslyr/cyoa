export type StoryNode = { 
  state: StoryState, 
  text: string, 
  branches: { state: StoryState, text: string }[], 
}

export type StoryState = number
export type BranchState = 0 | 1 | 2 | 3

class StoryGraph {
  constructor(head: StoryNode) {
    const root = head
  }

  link(head: StoryNode, tail: StoryNode, choiceText: string) {
    head.branches.push({ state: tail.state, text: choiceText })
  }
}