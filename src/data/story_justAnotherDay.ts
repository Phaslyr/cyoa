// Potential file naming structure: story_[storyName].ts

import { StoryNode, StoryGraph } from '../models/StoryGraph'

const node1 = new StoryNode(
`The relentless beeping of your phone eases you out of your peaceful slumber. You turn toward your nightstand and glance groggily at your lit phone. 7:00 AM. Just as you expected.

Just another morning in your routine, everyday life.

Your foggy brain urges you to stay on the bed, begging you for just ten more minutes of sleep, but you pull yourself up anyways. You've done this enough times to know a splash of water on your face is enough to fan away the fog, like windshield wipers right after a flash storm blew past your house.

You lurch over to the bathroom sink to get that palmful of water stimulating your nervous system, taking the opportunity to wash the lines of sleep out of your face. The zombie that stares into your soul when you first peer into the mirror is quickly replaced by the serious gaze of someone who looks as if they've seen far too much for their years. You're still firmly in your twenties, but every other week you pluck a strand of whitening hair straight out of your scalp. You don't feel all that stressed at work lately, but that's what they all tell themselves.

Then it's out of your bedroom you go. A cup of water on the kettle, two slices of bread in the toaster, and three different breakfast items on the skillet---an egg, two sausages, and three pieces of bacon. At this point, you've gotten it down to a tee: exactly seven minutes after you walk into the kitchen, you're ready to start munching on the same breakfast you've eaten every day for years now. It doesn't bother you; you've never really liked breakfast anyways.

A freshly brewed cup of tea in your hands, you slowly stroll up to your apartment window, spoon rhythmically swirling around the steaming liquid, exposing every layer to the air so you don't have to sue yourself for giving you third degree burns.

Your mind is fully cleared up by now, and you take in the beautiful scenery outside, smiling as you see...`
)

const story = new StoryGraph("Just Another Day", "???", node1)

export default story