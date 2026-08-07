export const MAX_BRANCHES = 4 // Layout designs for branches [1, 2, 3, 4] -> Story.tsx

type Branch = { label: string, node: number, }

export type StoryTracker = { 
  graph: StoryGraph, 
  node: StoryNode,
  loaded: boolean,
  variables?: object,
}

export class StoryNode {
  private _id: number | undefined
  public text: string
  private _branches: Branch[] = []

  constructor(storyText: string = "",) {
    this.text = storyText
  }

  rewrite(storyText: string) {
    this.text = storyText
  }

  link(labelText: string, nextNodeId: number) {
    if (this.branches.length >= MAX_BRANCHES) {
      throw new Error(`Branches cannot exceed ${MAX_BRANCHES}`)
    }
    this.branches.push({ label: labelText, node: nextNodeId })
  }

  progress(nextBranch: number): number {
    if (nextBranch >= this.branches.length || nextBranch < 0) {
      throw new Error(`Index ${nextBranch} is out of bounds for branches of length ${this.branches.length}`)
    }
    return this.branches[nextBranch].node
  }

  public get id(): number | undefined {
    return this._id
  }
  
  public set id(n: number) {
    if (this._id !== undefined) {
      throw new Error(`Node id is already assigned (${this.id})`)
    }
    this._id = n;
  }
  
  public get branches(): Branch[] {
    return this._branches
  } 
}


export class StoryGraph {
  readonly title: string
  readonly root: StoryNode
  private _nodeMap: Map<number, StoryNode> = new Map<number, StoryNode>()
  private _nextId: number = 0

  constructor(storyName: string = "", head: StoryNode = new StoryNode()) {
    this.title = storyName
    this.root = head

    this.register(this.root)
  }

  register(node: StoryNode) {
    node.id = this.nextId
    this.nodeMap.set(this.nextId, node)
    this.nextId++
  }

  link(label: string, head: StoryNode, tail: StoryNode) {
    if (tail.id === undefined) {
      this.register(tail)
    }

    head.link(label, tail.id!)
  }

  end(ending: StoryNode) {
    if (this.root.id === undefined) {
      throw new Error(`Root has no id. Why tf does the root have no id???`)
    }
    ending.link(`Return to start.`, this.root.id)
  }

  get(nextNodeId: number): StoryNode {
    const nextNode = this.nodeMap.get(nextNodeId)
    if (nextNode === undefined) {
      throw new Error(`No node found with id ${nextNodeId}`)
    }
    return nextNode
  }

  private get nextId(): number {
    return this._nextId
  }

  private set nextId(n: number) {
    this._nextId = n
  }

  private get nodeMap(): Map<number, StoryNode> {
    return this._nodeMap
  }
}

export function createBlankStoryTracker(_?: null): StoryTracker {
  const g = new StoryGraph()
  const n = g.root
  return { graph: g, node: n, loaded: false }
}