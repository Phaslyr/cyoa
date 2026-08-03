export type BranchState = 0 | 1 | 2 | 3

export class StoryNode {
  text: string
  branches: { label: string, node: StoryNode, }[]

  constructor(storyText?: string,) {
    if (storyText !== undefined) {
      this.text = storyText
    } else {
      this.text = ""
    }
    this.branches = []
  }

  write(storyText: string) {
    this.text = storyText
  }

  link(labelText: string, nextNode: StoryNode) {
    if (this.branches.length + 1 >= 5) {
      throw new Error("Branches cannot exceed four")
    }
    this.branches.push({ label: labelText, node: nextNode})
  }

  progress(nextBranch: BranchState) {
    if (nextBranch >= this.branches.length ) {
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