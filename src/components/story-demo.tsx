"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

interface StoryState {
  text: string;
  choices?: {
    text: string;
    next: string;
  }[];
}

const storyStates: Record<string, StoryState> = {
  start: {
    text: "Rain streaks down the library windows as you shelve the last book of your evening shift. The building is empty except for shadows and the sound of your footsteps on marble floors. As you reach for your coat, you hear the soft creak of leather boots behind you. You turn to find him standing in the doorway—tall, broad shoulders filling the frame, dark hair tousled from the storm, green eyes that make your stomach flutter. 'I was hoping I'd catch you before you left,' he says, his voice a low rumble that sends warmth spreading through your chest.",
    choices: [
      { text: "Ask what he needs this late", next: "curious" },
      { text: "Tell him the library is closed", next: "professional" },
    ],
  },
  curious: {
    text: "You set down your coat, pulse quickening despite yourself. 'What can I help you with?' His smile is devastating, slow and knowing. 'I've been watching you work,' he admits, taking a step closer. The way he moves is fluid, confident—like a man who knows exactly what he wants. 'The way you handle those old books, so gentle, so... thorough.' He's close enough now that you can smell his cologne—sandalwood and rain and something uniquely masculine. 'I have a rare collection at home. Perhaps you'd like to see it?' The invitation hangs between you, his eyes dark with promise.",
    choices: [
      { text: "Accept his invitation", next: "accept" },
      { text: "Suggest meeting somewhere public instead", next: "cautious" },
    ],
  },
  professional: {
    text: "'I know,' he says, not moving from the doorway. His presence fills the space, commanding and magnetic. 'But I'm not here for books.' Thunder rumbles overhead as he steps inside, closing the door behind him with deliberate slowness. 'I'm here for you.' Your breath catches as he approaches, all contained power and barely restrained hunger. 'Do you know what you do to me? Sitting here every day, lost in your books, completely unaware of how absolutely stunning you are?' His voice drops to a whisper. 'I've been going crazy thinking about you.'",
    choices: [
      { text: "Stand your ground", next: "defiant" },
      { text: "Ask what he wants", next: "nervous" },
    ],
  },
  accept: {
    text: "The drive to his place is electric with tension, rain drumming against the windows of his sleek car. He lives in a converted Victorian mansion, all dark wood and leather and masculine elegance. True to his word, shelves of rare books line the walls, but you're acutely aware of how alone you are with him. He pours you wine, his fingers deliberately brushing yours as he hands you the glass. 'You're shaking,' he observes, his voice soft but intense. 'Are you nervous?' Before you can answer, he's behind you, his chest solid against your back, lips brushing your ear. 'Let me take care of you.'",
  },
  cautious: {
    text: "'Smart girl,' he murmurs, approval evident in his voice. The praise makes you flush with unexpected pleasure. 'Café Luna tomorrow at eight?' You nod, not trusting your voice around this man who seems to see right through you. He steps closer, close enough that you can feel the heat radiating from his body. 'I'll be thinking about you tonight,' he whispers, his breath warm against your cheek. 'About what I want to do to you.' Then he's gone, leaving you alone with your racing heart and aching need.",
  },
  defiant: {
    text: "You straighten your spine, trying to ignore how your body responds to his proximity. 'You can't just waltz in here and—' But he's moving before you can finish, closing the distance between you in two strides. He doesn't touch you, but he's so close you can see the flecks of gold in his green eyes, feel the warmth of his breath. 'Can't what?' he challenges, his voice dropping to that dangerous whisper. 'Can't tell you that you've been driving me out of my mind? Can't admit that I think about you every single night?' Your back hits the bookshelf, trapped between leather spines and his overwhelming presence.",
  },
  nervous: {
    text: "'What do I want?' His laugh is low, rich, sending shivers down your spine. He braces one hand against the shelf beside your head, leaning in until you're drowning in his scent. 'I want to taste every inch of you. I want to hear you moan my name. I want to show you pleasures you've only read about in those romance novels you hide behind the desk.' Lightning illuminates his face, all sharp angles and raw desire. 'But mostly, I want you to stop pretending you don't feel this fire between us. I see it in your eyes, sweetheart. You want me just as much as I want you.'",
  },
};

export function StoryDemo() {
  const [currentState, setCurrentState] = useState("start");
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [storyHistory, setStoryHistory] = useState(["start"]);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showThinking, setShowThinking] = useState(false);
  const [showChoices, setShowChoices] = useState(false);
  const storyTextRef = useRef<HTMLDivElement>(null);

  const currentStory = storyStates[currentState];

  // Typewriter effect
  useEffect(() => {
    if (showThinking) return;

    const targetText = currentStory.text;
    setDisplayedText("");
    setIsTyping(true);
    setShowChoices(false);

    let currentIndex = 0;
    const typeInterval = setInterval(() => {
      if (currentIndex < targetText.length) {
        setDisplayedText(targetText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);

        // Show choices after a brief pause when typing completes
        if (currentStory.choices) {
          setTimeout(() => {
            setShowChoices(true);
          }, 1500); // Delay before choices appear
        }
      }
    }, 30); // Adjust speed here (lower = faster)

    return () => clearInterval(typeInterval);
  }, [currentState, showThinking, currentStory.text, currentStory.choices]);

  const handleChoice = (nextState: string) => {
    setShowThinking(true);
    setShowChoices(false);

    // Scroll to story text
    storyTextRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setTimeout(() => {
      setStoryHistory([...storyHistory, nextState]);
      setCurrentState(nextState);
      setShowThinking(false);

      if (!storyStates[nextState].choices) {
        // Wait for typing to complete before showing waitlist
        const checkTypingComplete = () => {
          if (!isTyping) {
            setTimeout(() => setShowWaitlist(true), 1500);
          } else {
            setTimeout(checkTypingComplete, 100);
          }
        };
        setTimeout(checkTypingComplete, 1000);
      }
    }, 1500); // Thinking duration
  };

  const resetDemo = () => {
    setCurrentState("start");
    setStoryHistory(["start"]);
    setShowWaitlist(false);
    setShowThinking(false);
    setDisplayedText("");
    setIsTyping(false);
    setShowChoices(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto relative">
      {/* Subtle flowing curves */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-25"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient
              id="storyGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="currentColor"
                stopOpacity="0.12"
                className="text-primary"
              />
              <stop
                offset="100%"
                stopColor="currentColor"
                stopOpacity="0.06"
                className="text-accent"
              />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0,0; 10,3; 0,0"
                dur="45s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <path
            d="M-5,35 Q20,20 45,35 Q70,50 105,25 L105,100 L-5,100 Z"
            fill="url(#storyGradient)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 2,-1; 0,0"
              dur="45s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M-5,60 Q35,45 70,60 Q90,75 105,50"
            stroke="url(#storyGradient)"
            strokeWidth="0.8"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -1,2; 0,0"
              dur="60s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-card/60 via-card/40 to-card/60 rounded-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5 rounded-3xl" />

      {/* Main content */}
      <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        {/* Progress indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-2">
            {storyHistory.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-in-out transform ${
                  index < storyHistory.length - 1
                    ? "bg-primary/60 scale-100"
                    : "bg-primary animate-pulse scale-110"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${index * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Story text */}
        <div className="text-center space-y-8 md:space-y-12">
          <div
            ref={storyTextRef}
            className="max-w-4xl mx-auto px-2 transition-all duration-500 ease-in-out"
          >
            {showThinking ? (
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/60 leading-relaxed font-light italic min-h-[2em] flex items-center justify-center animate-fade-in">
                <span className="animate-pulse">Thinking</span>
                <span className="ml-1 animate-bounce">.</span>
                <span
                  className="ml-1 animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                >
                  .
                </span>
                <span
                  className="ml-1 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  .
                </span>
              </div>
            ) : (
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/90 leading-relaxed font-light italic animate-fade-in">
                {displayedText}
                {isTyping && <span className="animate-pulse">|</span>}
              </p>
            )}
          </div>

          {/* Choices */}
          {currentStory.choices && (
            <div
              className={`max-w-2xl mx-auto px-2 transition-all duration-1000 ease-out overflow-hidden ${
                !showThinking && showChoices ? "h-auto" : "h-0"
              }`}
            >
              <div
                className={`space-y-4 sm:space-y-6 transition-all duration-700 ease-in-out ${
                  !showThinking && showChoices
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <div
                  className={`text-center transition-all duration-500 ${
                    !showThinking && showChoices
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <p className="text-base sm:text-lg text-accent font-medium mb-6 sm:mb-8">
                    What do you do next?
                  </p>
                </div>

                {currentStory.choices.map((choice, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className={`w-full text-base sm:text-lg py-4 sm:py-6 px-4 sm:px-8 text-left justify-start bg-card/20 border-primary/30 hover:bg-primary/10 hover:border-primary/60 hover:text-foreground transition-all duration-500 rounded-xl backdrop-blur-sm min-h-[60px] sm:min-h-[72px] whitespace-normal hover:scale-[1.02] hover:shadow-lg ${
                      !showThinking && showChoices
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{
                      transitionDelay:
                        !showThinking && showChoices
                          ? `${index * 0.15}s`
                          : "0s",
                    }}
                    onClick={() => handleChoice(choice.next)}
                  >
                    <span className="text-accent mr-2 sm:mr-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                    <span className="text-left leading-relaxed break-words">
                      {choice.text}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Story end states */}
          {showWaitlist && !isTyping && (
            <div className="text-center space-y-6 sm:space-y-8 pt-6 sm:pt-8 border-t border-primary/20 max-w-2xl mx-auto px-2 animate-fade-in">
              <div className="space-y-3 sm:space-y-4 animate-slide-up">
                <div className="text-3xl sm:text-4xl animate-bounce">✨</div>
                <h3
                  className="text-xl sm:text-2xl font-bold text-primary animate-fade-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Want to explore further?
                </h3>
                <p
                  className="text-base sm:text-lg text-muted-foreground animate-fade-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  This is just the beginning. Create your own personalized
                  adventures —{" "}
                  <span className="text-primary font-semibold">
                    75% off your first three months
                  </span>
                  .
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() =>
                    document
                      .getElementById("experience")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Join the waitlist
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={resetDemo}
                  className="hover:bg-primary/10 border-primary/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-105"
                >
                  Try Another Path
                </Button>
              </div>
            </div>
          )}

          {!currentStory.choices && !showWaitlist && !isTyping && (
            <div className="text-center pt-6 sm:pt-8 border-t border-primary/20 max-w-xl mx-auto px-2 animate-fade-in">
              <div className="space-y-4 sm:space-y-6 animate-slide-up">
                <p className="text-base sm:text-lg text-muted-foreground animate-fade-in">
                  To be continued...
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={resetDemo}
                  className="hover:bg-primary/10 border-primary/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl w-full sm:w-auto transition-all duration-300 hover:scale-105 animate-slide-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  ← Try Another Path
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
