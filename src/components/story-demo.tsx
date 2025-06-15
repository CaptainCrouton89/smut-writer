'use client'

import { useState } from "react"
import { Button } from "./ui/button"

interface StoryState {
  text: string
  choices?: {
    text: string
    next: string
  }[]
}

const storyStates: Record<string, StoryState> = {
  start: {
    text: "The candlelight flickers across your skin as you feel their eyes on you from across the room. The tension is electric, and they slowly approach, their gaze never leaving yours. As they reach out to touch your hand, their fingers barely grazing your skin, they whisper...",
    choices: [
      { text: "Pull away with a teasing smile", next: "tease" },
      { text: "Lean in closer and whisper back", next: "bold" }
    ]
  },
  tease: {
    text: "You pull back with a coy smile, your eyes dancing with mischief. 'Not so fast,' you whisper, backing toward the silk curtains. The hunger in their eyes intensifies as they follow, clearly enjoying the chase. They corner you against the wall, their breath hot against your neck as they murmur, 'You're going to make me work for it, aren't you?'",
    choices: [
      { text: "Give in to their advances", next: "surrender" },
      { text: "Continue the game of seduction", next: "continue" }
    ]
  },
  bold: {
    text: "You lean in close, your lips barely touching their ear as you whisper something that makes their breath catch. Their hands find your waist, pulling you closer as the space between you disappears. The room feels charged with electricity as they trail kisses down your neck, each touch sending shivers through your body...",
    choices: [
      { text: "Take control of the moment", next: "control" },
      { text: "Let them lead the dance", next: "follow" }
    ]
  },
  surrender: {
    text: "You feel yourself melting into their touch as they press closer, their lips finding yours in a passionate kiss that leaves you breathless. Your resistance crumbles as desire takes over, and in this moment of surrender, you realize this is exactly where you want to be...",
  },
  continue: {
    text: "You slip away from their grasp with a playful laugh, the game of cat and mouse continuing as the night grows more intense. Every stolen glance, every fleeting touch builds the anticipation until neither of you can resist any longer...",
  },
  control: {
    text: "You take charge, your hands tangling in their hair as you pull them closer, showing them exactly what you want. The power dynamic shifts as you guide their movements, your confidence driving them wild with desire...",
  },
  follow: {
    text: "You surrender to their lead, letting them guide you through this dance of passion. Their experienced touch knows exactly how to make you respond, each caress perfectly placed to build the fire burning between you...",
  }
}

export function StoryDemo() {
  const [currentState, setCurrentState] = useState('start')
  const [showWaitlist, setShowWaitlist] = useState(false)
  const [storyHistory, setStoryHistory] = useState(['start'])

  const currentStory = storyStates[currentState]

  const handleChoice = (nextState: string) => {
    setStoryHistory([...storyHistory, nextState])
    setCurrentState(nextState)
    if (!storyStates[nextState].choices) {
      setTimeout(() => setShowWaitlist(true), 2500)
    }
  }

  const resetDemo = () => {
    setCurrentState('start')
    setStoryHistory(['start'])
    setShowWaitlist(false)
  }

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/40 to-card/60 rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 rounded-3xl" />
      
      {/* Main content */}
      <div className="relative p-12 md:p-16 lg:p-20">
        {/* Progress indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {storyHistory.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index < storyHistory.length - 1 
                    ? 'bg-primary/60' 
                    : 'bg-primary animate-pulse'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Story text */}
        <div className="text-center space-y-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 leading-relaxed font-light italic">
              {currentStory.text}
            </p>
          </div>
          
          {/* Choices */}
          {currentStory.choices && (
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-lg text-accent font-medium mb-8">What do you do next?</p>
              </div>
              
              {currentStory.choices.map((choice, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="w-full text-lg py-6 px-8 text-left justify-start bg-card/20 border-primary/30 hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 rounded-xl backdrop-blur-sm"
                  onClick={() => handleChoice(choice.next)}
                >
                  <span className="text-accent mr-4">→</span>
                  {choice.text}
                </Button>
              ))}
            </div>
          )}

          {/* Story end states */}
          {showWaitlist && (
            <div className="text-center space-y-8 pt-8 border-t border-primary/20 max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="text-4xl">✨</div>
                <h3 className="text-2xl font-bold text-primary">Want to explore further?</h3>
                <p className="text-lg text-muted-foreground">
                  This is just the beginning. Create your own personalized adventures.
                </p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-xl"
                  onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Full Access
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={resetDemo}
                  className="hover:bg-primary/10 border-primary/30 px-8 py-4 text-lg rounded-xl"
                >
                  Try Another Path
                </Button>
              </div>
            </div>
          )}

          {!currentStory.choices && !showWaitlist && (
            <div className="text-center pt-8 border-t border-primary/20 max-w-xl mx-auto">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground">To be continued...</p>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={resetDemo}
                  className="hover:bg-primary/10 border-primary/30 px-8 py-4 text-lg rounded-xl"
                >
                  ← Try Another Path
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}