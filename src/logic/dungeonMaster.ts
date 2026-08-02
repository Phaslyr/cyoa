import { stories, choices } from "./storyTexts"

// Functions

export function initializeStory() {
  return { text: stories[0], choices: choices[0] }
}

export function updateStory(path: SelectionState) {
  if (path === 0) {
    return { text: stories[1], choices: choices[0] }
  } else {
    return { text: stories[2], choices: choices[0] }
  }
}

// Story Tracker

export type SelectionState = 0 | 1