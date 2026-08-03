export const MAX_BRANCHES = 4 // Layout designs for branches [1, 2, 3, 4] -> Story.tsx

export class StoryNode {
  text: string
  branches: { label: string, node: StoryNode, }[]

  constructor(storyText: string = "",) {
    this.text = storyText
    this.branches = []
  }

  write(storyText: string) {
    this.text = storyText
  }

  link(labelText: string, nextNode: StoryNode) {
    if (this.branches.length >= MAX_BRANCHES) {
      throw new Error(`Branches cannot exceed ${MAX_BRANCHES}`)
    }
    this.branches.push({ label: labelText, node: nextNode})
  }

  progress(nextBranch: number) {
    if (nextBranch >= this.branches.length || nextBranch < 0) {
      throw new Error(`Index ${nextBranch} out of bounds`)
    } else {
      return this.branches[nextBranch].node
    }
  }
}

export class StoryGraph {
  root: StoryNode

  constructor(head: StoryNode) {
    this.root = head
  }
}