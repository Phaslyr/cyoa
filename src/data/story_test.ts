// Potential file naming structure: story_[storyName].ts

import { StoryNode } from "../models/StoryGraph"

const a = new StoryNode("Would you rather have unlimited bacon but no games or games unlimited games but no games")
const b = new StoryNode("Bacon is shit but okay")
const c = new StoryNode("Congrats you just played yourself")

a.link("unlimited bacon but no games", b)
a.link("games unlimited games but no games", c)

b.link("go home", a)
b.link("or go home", a)
b.link("or go home", a)
c.link("go home", a)
c.link("or go home", a)
c.link("or go home", a)
c.link("or go home", a)

export default a