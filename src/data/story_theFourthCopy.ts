// Potential file naming structure: story_[storyName].ts

// Story courtesy of Claude

import { StoryNode, StoryGraph } from "../models/StoryGraph"

const node1 = new StoryNode(
`It is the twenty-ninth of November, half past five in the morning, and you are laying the fire in a room where the Tsar of Russia sat two nights ago. You are twenty-three, born in a village outside Budweis, and for eight months you have been Kammerzofe to Wilhelmine, Duchess of Sagan — which means you dress her, you sleep in the closet off her bedroom, and you hear every word said in her drawing room by men who believe servants are furniture.

Since September you have also been paid twenty Gulden a month, silver, by a soft-spoken man called Herr Schill, to remember those words.

Wednesday night the Duchess put a letter into your hand. No address on it, no arms in the wax. "You will take this to the Rossau on Friday, to the timber-yard by the water, and give it to a man who asks you the time." Before Friday came you did what Herr Schill pays for: you sat up with a candle and copied it in your own bad hand, every line, though the lines meant nothing to you.

You never delivered it. Yesterday morning the original was gone from under your mattress.

This morning the kitchen has news, brought up by the girl who fetches milk. They took a man out of the Danube canal at the Rossau in the night. Russian, they say. No boots on him.

You have a copy nobody wants, no original, and a dead man who was supposed to ask you the time.

Downstairs, a bell. The Duchess is awake early, which she never is. Tonight she goes to the Redoutensaal, where the whole Congress will be masked and dancing after the concert; and twice this week a Russian officer named Sorokin has called at this house and been sent away.`
)

const node2 = new StoryNode(
`The canal at the Rossau smells of wet timber and cold iron. They have laid him on planks between two stacks of boards, under sacking, and a corporal of the garrison is standing over him with the particular patience of a man who has been standing there since three.

He lets you look because you are a woman and because you have a Gulden in your glove.

The dead man is perhaps thirty. He has been in the water less than a day. No boots, no coat, no purse — the canal is thorough that way, and so are the people who live along it. But nobody thought to look at his shirt-cuff, which has been turned up and stitched, and inside the stitching is a corner torn from a larger sheet: three short rows of numbers, and underneath them, in pencil, in a clerk's small hand, a single name. Gentz.

Everyone in Vienna knows that name. Friedrich von Gentz is Metternich's pen, secretary to the whole Congress, permanently in debt and permanently for sale.

You have the scrap inside your sleeve when the horses come. An officer of the Tsar's suite dismounts at the timber-yard gate — a lieutenant, dark, unhurried, in a greatcoat too good for this district — and gives the corporal a name to write down. He looks at the dead man for a long moment without any expression a stranger could read.

Then he looks at you. Not at your face. At your sleeve.

"You are from the Palais Palm," he says, in German that has been learned carefully and used often. It is not a question, and he does not wait for an answer, and he does not raise the alarm either.`
)

const node3 = new StoryNode(
`Under a good domino nobody can tell a duchess from her maid, which is exactly what the police have been complaining about for two months.

The Redoutensaal is very hot. Beethoven's battle piece was played earlier for the sovereigns — cannon and musketry done with drums, and half the room applauding a war they are still, quietly, arranging to fight again. Now the floor has been cleared and there are perhaps two thousand people in it, of whom you would guess a hundred are being paid by somebody to be here.

You see things you should not be able to see. At the card tables, Gentz, losing with the serenity of a man playing with someone else's money. On the floor, your mistress dancing with young Prince Windisch-Graetz, and Metternich watching them from a doorway with his face arranged into nothing at all. And by the far doors, refusing a domino, standing in Russian uniform because he wants to be findable: the lieutenant.

Two other things find you first.

Gentz's own secretary — a thin young man you have seen carrying paper along the Ballhausplatz — leaves the card room by a side door with his hat already in his hand, which is not how a man leaves a party he is enjoying.

And a man in a grey domino has been standing at your shoulder for some time. When you turn, he speaks quietly, pleasantly, as though continuing a conversation you began earlier.

"The room above the post office," he says. "After midnight. Say to the clerk that you have come about the Trieste bag, and he will open the door. Somebody has been very careless with your name, my dear, and I would rather it was mended than punished."

Then he is gone into the crowd, which is what grey dominoes are for.`
)

const node4 = new StoryNode(
`They do not keep you waiting, which frightens you more than waiting would have.

The room is small and very warm and smells of sealing-wax. Herr Schill is not in it. The man behind the desk is old enough to be your father, dressed like a modest official, and there is a card-index against the wall with more drawers in it than the Palais Palm has windows. Nobody says his name aloud. Nobody in Vienna needs to; there is one man who reads every letter that enters the city, and every servant in every great house has been told what to do if she is ever brought to this room.

He listens to your confession without once interrupting. Then he opens a drawer and puts a letter on the desk between you.

It is unaddressed. There are no arms in the wax. The seal is unbroken.

"This was under your mattress," he says. "It has been in this drawer since Thursday morning. I have not opened it." He lets that sit. "Neither have you. That is, so far, the only interesting thing about you, Markéta — that a girl who would copy a letter for twenty Gulden would not break a seal for it."

He does not accuse you of anything. He does not have to; he explains, gently, the arithmetic of your position, which is that a Bohemian servant with a debt in Budweis and a copy in her own handwriting is the easiest kind of person in Europe to hang.

Then he gives you a name — Sorokin, lieutenant, in the Tsar's suite — and tells you the drowned man was that lieutenant's servant, and asks, as though it were a small favour between friends, whether you would care to learn what the lieutenant wanted at your mistress's door.

On the desk, half under his elbow, lies an open route-book: the couriers' schedule, stages and hours, upside down to you.`
)

const node5 = new StoryNode(
`The stair in the Ballgasse smells of size and lamp-oil, and on the third floor there is a door with no plate on it and a strip of light beneath.

Wenzel Pilát is a Bohemian like you, from Tábor, and he has the finest hand in Vienna and the worst luck. By day he makes fair copies of Congress protocols for men who pay him by the sheet. By night he makes other things. He is fifty, ink to the second knuckle, and he is expecting somebody — you can tell by the way his face falls when it turns out to be you.

He pours you the bad wine anyway, because you are from home.

"Three copies," he says at last, when you have told him enough to be dangerous to him. "This week. A letter in a woman's hand — a good hand, a great lady's hand, the sz like a bird's wing, I would know it again in a hundred years. Three fair copies, and the man who paid stood there while I did it and took the original away with him, and paid in French gold. Not paper. French gold."

Only one delegation in Vienna pays in French gold, and it belongs to a lame old man who has spent two months turning everybody's quarrel into France's opportunity.

"Do not ask me what was in it," Pilát says. "I copy. I do not read. A man who reads gets opinions and a man with opinions ends in the canal." He hears himself say it, and looks at his hands. "I could make a fourth copy," he adds. "If a person needed one letter to be in a place where it is not."`
)

const node6 = new StoryNode(
`The Prater in the last days of November is all bare chestnuts and wet gravel and the smoke of the coffee-huts, and at four in the afternoon the light is already going. You have walked far enough down the avenue that the carriages are only a noise behind you.

Lieutenant Andrei Ilyich Sorokin walks slowly, because of the gravel and because of you, and for a while he says nothing at all, which is a thing you did not know an officer could do.

"He had been with me nine years," he says finally. "In the water they told you Russian, no boots, no purse. They did not tell you he was carrying nothing. Nothing at all. A courier with empty hands." He glances at you. "Your Duchess's letter never reached him, and I am beginning to think it was never meant to. Somebody wanted it to be seen going to the Rossau. That is a different thing from wanting it delivered."

The wind takes the smoke sideways. Somewhere behind you a woman laughs at a hut door.

"I know what you are," he says, without heat. "There are perhaps four hundred of you in this city and I do not blame one of you. A man in Petersburg pays me too. That is what this winter is." He stops walking. "But you are the only one of the four hundred who has stood in that house and seen who comes in at night, and so I am going to be a fool."

He takes out a letter — sealed, small, and addressed to nobody.

"Take this to the room above the post office and give it to the clerk with the Trieste bag. If you take it, you will know afterwards which side you are standing on. If you do not take it, I will walk you back to the gate and we will both be sensible people, and I would rather not be a sensible person, with you."`
)

const node7 = new StoryNode(
`She is at the glass with her hair down, and she does not turn around, and she lets you get all the way to the end of it before she speaks.

"I have known since October," Wilhelmine of Sagan says. "About your Herr Schill. You are not a good liar, and you are worse at spending money than you are at lying." She turns then. She is thirty-three and she has been the subject of police reports since she was nineteen. "Everything I have said in front of you since October, I have said because you were in the room. You have been very useful to me. Do you understand what I am telling you? Half the nonsense in Baron Hager's reports about this house is mine."

You feel the floor go out from under a thing you had thought was your own private sin.

"But that letter," she says, and now the voice changes, "that letter was true."

She tells you, in about nine sentences, the thing that has cost her everything and that no plenipotentiary in Vienna would consider politics at all. There is a girl of thirteen. She was born when the Duchess was nineteen; she was taken away and put with strangers and she has been moved twice since; her name is Gustava. Every door in Europe has been closed on this subject by men who are at this moment lodging in the Hofburg and calling one another brother.

"There is a route," she says. "Vienna, Nussdorf, Pressburg, and afterwards south. It moves things for men who cannot be seen to move them. I paid to put one letter in it. One." Her hands are perfectly steady, which is somehow worse. "And now a man is dead in the canal and I do not know whether he died for my daughter or for something else that was travelling in the same bag."`
)

const node8 = new StoryNode(
`It is past midnight when you come to the room above the post office. The clerk who opens does not ask your name; you say the words about the Trieste bag and he steps back from the door as though you were an inspection he had been warned about.

Nobody in Vienna is supposed to see this room, and half of Vienna knows exactly what happens in it.

There are kettles on a stove and a long table under six lamps. A boy holds a letter over the steam and the seal lifts whole. Two clerks copy at speed, one reading aloud in a flat murmur — from Hardenberg, to Berlin, in cipher, begins — while a third works at a cake of wax with a heated wire and a forged matrix, rebuilding an eagle that has to be back in the mailbag by four in the morning. It is a factory. It has the calm of a good bakery.

On the table, third from the left, under a paperweight, is a letter with no address on it and no arms in the wax. It is open. Beside it lie two fair copies, in a hand you would know anywhere, with the sz like a bird's wing.

And at the end of the table is the ledger, and the ledger is the thing that stops your breath. Not the names — the route, repeated down the page in the same four words, week after week since August. Wien. Nussdorf. Pressburg. Triest.

Trieste is the sea. You do not let yourself finish the thought about what lies four days' sail from an Adriatic port, on a small island, with a small army, in the eighth month of a peace that everyone in the Redoutensaal is toasting.

The clerk with the kettle looks up and asks, politely, whether you would like to sit down.`
)

const node9 = new StoryNode(
`Past eleven, and the river is running high and black and quick, and the landing at Nussdorf is nothing but a stone quay, a shuttered customs hut, and a lantern hung too low to show a face.

There is a boat. Not a barge — a light, dirty, fast thing with four men in it who do not speak, and a bag already aboard.

Sorokin is on the quay with his coat unbuttoned and his hands empty, and he is not surprised to see you, which tells you he has been standing here expecting somebody and is only now finding out who.

"Pressburg by morning," he says. "Then south. Ten days to the coast, if the passes hold." He holds out a packet, oilcloth, tied with tape, the size of a prayer-book. "One letter of mine. Two of your Duchess's. And a third that I have not read and will not, because a man who reads them ends in the canal, as your countryman in the Ballgasse would tell you."

The water slaps the stone. Behind you, far off up the road, there are lights at the gate where the gendarmes keep the customs post, and a man on that road could be back among them in four minutes at a run.

"My servant died to make somebody believe this route was finished," Sorokin says. "It is not finished. It goes out tonight either way." He turns the packet over in his hand. "But whether it goes out with you standing on this quay watching it, or with you in it, or with the gendarmes coming down the road — that is not mine to decide, and I have been standing here in the cold for an hour hoping that it would be."`
)

const node10 = new StoryNode(
`Pilát does not sleep that night, and neither do you. He works with two candles and a jeweller's glass and he swears in Czech at the sz, and at four in the morning he hands you a letter that is better than the one it replaces.

It goes back into the writing-case at the bottom of the second drawer, under the pressed programme from the carousel, and no one ever says a word about it. The Duchess does not open that drawer for eleven weeks.

Herr Schill pays you twenty Gulden in December and twenty in January. In February you send forty-one Gulden silver to Budweis and your mother's debt is a thing that used to exist. The drowned man at the Rossau is written down as an accident of the canal, which is what everything at the Rossau is written down as.

Lieutenant Sorokin leaves with the Tsar's suite in the spring. You do not speak again.

On the seventh of March, in the middle of the season, a courier comes into the Hofburg during a ball and the music does not stop but everything under it does. Napoleon has left Elba. He has been at sea for a week; he has been ashore in France for six days; nobody in the room knew, and the men who could not agree about Saxony are suddenly, beautifully, agreed about everything.

You stand at the wall with the other maids holding your mistress's shawl, and you think about a route written in a ledger in four words, week after week since August, and about a boat at Nussdorf, and about the fact that the only honest thing you ever did in this business was refuse to break a seal.

You never do find out what was in the letter. That is the price of the fourth copy.

— fin —`
)

const node11 = new StoryNode(
`The posting-inn beyond Pressburg has a yard full of mud and a stove that draws badly, and at dawn you stand in the doorway with a tin cup of something hot while they change the horses.

The passport in your bodice gives an age five years wrong and a birthplace you have never seen. The name on it is not the name your mother used at the door of a village church outside Budweis, and you understand that you will not hear that name spoken aloud again by anyone who means it.

Sorokin comes out with straw on his sleeve and takes the cup out of your hands and drinks from it, which is the first entirely domestic thing he has ever done, and the sight of it undoes you more than the border did.

"Ten days to the coast," he says. "After that, I do not know. I have never known. I want to be very clear with you that I have never once known."

Behind you is a city where two emperors and four kings are dividing a continent and cannot agree on a province, where a duchess will spend her life failing to recover a daughter, where a man behind a desk has a card-index with a drawer for you in it and will keep the card for forty years out of tidiness.

Ahead of you is a road, and mud, and the sea somewhere at the end of it, and a small island four days' sail off that coast where a man is sitting with eight hundred guards and a great deal of time to think.

The peace has four months left. Neither of you knows that. You get into the coach.

— fin —`
)

const node12 = new StoryNode(
`You name your price and he does not haggle, because men like that never haggle; they simply agree, and then own you.

Forty Gulden a month, silver. Your mother's debt cleared at once, in one payment, by a clerk you never meet. And a number, because confidants are not named in the reports — you become a line of handwriting that goes to the Emperor's own hands three times a week, and Vienna reads you for a whole winter without ever knowing it is you.

You are very good at it. That is the part nobody warns you about. You are good at it because you love the house you are betraying, and love makes you accurate.

The Duchess never learns. She goes on being careless and magnificent in front of you for four more months; she goes on failing to get her daughter back; in January she quarrels with Metternich in the little drawing room and you write it all down before the candles are out.

Lieutenant Sorokin is transferred in February, which is a thing that happens to officers whose names appear too often in Austrian reports, and you know precisely why, because you wrote the sentence that did it. He sends nothing. There would have been nothing safe to send.

On the seventh of March the news comes from Elba and the whole city turns like a weathercock, and your number is in the file for the rest of your life.

Baron Hager dies in the spring of 1816. Nobody tells you. You go on writing to his successor out of habit, for a while, until the money stops, and the strangest thing is how much you miss having someone to tell.

— fin —`
)

const node13 = new StoryNode(
`It is very quick, and afterwards you will not be able to reconstruct the order of it.

There is shouting, and a lamp going over, and somebody's hand on your collar that is not attached to anyone you can see. There is the discovery — arriving far too late to be useful — that in a city of four hundred paid confidants, the one thing that is never a secret is that a servant has chosen a side.

You are held for eleven days without charge, in a room with a high window, and asked the same four questions by three different men who are all extremely polite. Nobody strikes you. It is not that sort of ministry. On the twelfth day you are put out of a side door at six in the morning with your own shoes in your hand and no character, which in Vienna in 1815 is the same as a sentence.

The Palais Palm does not take you back. Nothing takes you back.

The canal at the Rossau goes on running past the timber-yards all winter, high and black and quick, and in March a body comes out of it a hundred yards below the stacks, a young woman, no boots, no purse. The corporal on duty writes accident because that is what is written at the Rossau, and the sheet goes into a drawer in a room with more drawers than the Palais Palm has windows.

Four days later a courier reaches the Hofburg during a ball to say that Napoleon has left Elba, and every man in that building forgets everything smaller than that at once.

— fin —`
)

const node14 = new StoryNode(
`Nothing burns. That is what you decide, in the end — that in a city where every letter is opened twice and every servant is bought, the rarest possible act is to keep one thing whole and hand it to the person it belongs to.

She takes it without ceremony. She does not thank you, because great ladies of that generation did not thank servants, and you find, slightly to your annoyance, that you do not need her to.

You stay. That is the whole of it: you stay. You dress her and you sleep in the closet off her bedroom and you go on hearing everything, and you never take another Gulden from Herr Schill, and Herr Schill's masters go on writing about this house anyway, because they always did and always will. Your name is in a drawer somewhere with a number beside it. It stays there. Nothing comes of it. Vienna is full of cards that come to nothing.

The girl is never recovered. You should know that. There are letters and there are lawyers and there is a route through Nussdorf that is quietly abandoned in the spring, and there is no daughter at the end of any of it, and your mistress goes on being magnificent in public for twenty-five more years.

On the seventh of March you are standing behind her chair at a ball in the Hofburg with her shawl over your arm when a courier comes in still wearing his road-mud and speaks to Metternich, and Metternich reads six lines standing up, and the music goes on playing over the top of the news that Napoleon is ashore in France.

The Duchess's hand comes back and closes on your wrist. She does not turn around. She says, quite quietly, in Czech — which she does not speak, and which she must have learned one sentence of, from you, at some point, without your ever noticing:

"Stay near me."

You do.

— fin —`
)



const story = new StoryGraph("The Fourth Copy", "Historical Fiction, Mystery, Romance", node1)

story.link(`Go down to the Rossau before the light comes, and see the drowned man for yourself.`, node1, node2)
story.link(`Say nothing all day, take the Duchess's second-best domino out of the press, and go to the Redoutensaal tonight as a lady, to find the Russian among the dancers.`, node1, node3)
story.link(`Go straight to the police ministry and tell Herr Schill's masters that the letter is lost, before anyone else tells them.`, node1, node4)

story.link(`Leave at once and take the scrap to the copyist in the Ballgasse, who reads numbers for a living.`, node2, node5)
story.link(`Follow the lieutenant when he rides off, and make no particular effort to be unseen.`, node2, node6)
story.link(`Weep magnificently, announce yourself as the drowned man's cousin from Brünn, let the corporal show you everything he has, and then go home and dress for the ball as though nothing whatever had happened.`, node2, node3)

story.link(`Slip out after Gentz's secretary and follow him wherever he is going in such a hurry.`, node3, node5)
story.link(`Cross the floor, let your mistress see whose cloak you are wearing, and tell her everything.`, node3, node7)
story.link(`Take what the grey domino gave you — the address, the hour, the words about the Trieste bag — and use it.`, node3, node8)
story.link(`Walk up to the Russian, ask him to waltz, and pick his pocket in the turn.`, node3, node6)

story.link(`Take the name and go find Lieutenant Sorokin yourself, on your own terms.`, node4, node6)
story.link(`Say you will do it — but ask, first, to be shown the room where the letters are opened.`, node4, node8)
story.link(`Let him talk about loyalty as long as he likes, and read the route-book upside down across the desk until you have the one line that matters.`, node4, node9)

story.link(`Pay him for a forgery so good it flatters the original, and put it back in the Duchess's writing-case where the real one used to be.`, node5, node10)
story.link(`Take what he has told you straight to the Duchess herself, tonight, and let her decide what it means.`, node5, node7)
story.link(`Sell his fourth copy to the Russian, and ask in exchange for a passport and a name that is not yours.`, node5, node11)

story.link(`Tell him the whole truth — the copy, the twenty Gulden, the man behind the desk — and let it fall where it falls.`, node6, node11)
story.link(`Say nothing, take the letter, and carry it to the room above the post office.`, node6, node8)
story.link(`Answer him in no language at all — go blank and deaf and village-stupid, the way a Bohemian girl learns to in front of gentlemen, until he laughs, gives up, and simply takes you along to wherever he was going next.`, node6, node9)

story.link(`Put yourself entirely in her hands — tell her you will stop taking the police money, and ask for her protection instead.`, node7, node14)
story.link(`Warn her plainly that the police read everything and always have, and offer to go on reporting — with her choosing what they hear.`, node7, node12)
story.link(`Ask to borrow her carriage, her furs, and her name for one night, and drive out to Nussdorf yourself to see what leaves the water there.`, node7, node9)

story.link(`Memorise the last line of the ledger — the stage, the landing, the hour — and go where it points.`, node8, node9)
story.link(`Wait in the doorway downstairs until Baron Hager comes at dawn, as he does every dawn, and name your price to his face.`, node8, node12)
story.link(`Set your lamp down a little too near the resealing table, apologise beautifully, and take your time about leaving.`, node8, node13)

story.link(`Get into the boat.`, node9, node11)
story.link(`Turn and run up the road for the gendarmes at the gate, and shout while you still have the breath.`, node9, node13)
story.link(`Take the packet out of his hand, tell him the Danube is far too cold this time of year for Corsicans, and walk back to Vienna alone with it under your arm.`, node9, node14)

story.end(node10)
story.end(node11)
story.end(node12)
story.end(node13)
story.end(node14)

export default story