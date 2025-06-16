"use client";

import { useEffect, useRef, useState } from "react";
import { storyStates } from "../data/story-data";
import { Button } from "./ui/button";

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
