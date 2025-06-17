"use client";

import { StoryDemo } from "@/components/story-demo";
import { Button } from "@/components/ui/button";
import { WaitlistForm } from "@/components/waitlist-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Flowing SVG curves */}
      <div className="fixed inset-0 pointer-events-none w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="curve1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                stopColor="currentColor"
                stopOpacity="0.2"
                className="text-primary"
              />
              <stop
                offset="50%"
                stopColor="currentColor"
                stopOpacity="0.1"
                className="text-accent"
              />
              <stop
                offset="100%"
                stopColor="currentColor"
                stopOpacity="0.2"
                className="text-primary"
              />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0,0; 20,5; 0,0"
                dur="15s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient id="curve2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop
                offset="0%"
                stopColor="currentColor"
                stopOpacity="0.15"
                className="text-accent"
              />
              <stop
                offset="100%"
                stopColor="currentColor"
                stopOpacity="0.08"
                className="text-primary"
              />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0,0; -15,8; 0,0"
                dur="22s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>

          <path
            d="M-10,0 L-10,20 C15,15 40,5 65,25 C80,15 110,25 110,25 L110,60 C85,45 60,55 35,40 C20,50 -10,45 -10,45 Z"
            fill="url(#curve2)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -2,3; 0,0"
              dur="17s"
              repeatCount="indefinite"
            />
          </path>

          {/* Flowing curves that extend well beyond viewport */}
          <path
            d="M-15,35 Q15,15 40,35 Q65,55 115,25"
            stroke="url(#curve1)"
            strokeWidth="1"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 5,2; 0,0"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M-15,65 Q15,45 40,65 Q65,85 115,55"
            stroke="url(#curve2)"
            strokeWidth="0.8"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -3,4; 0,0"
              dur="15s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Dramatic lighting effects */}
      <div className="fixed inset-0 bg-gradient-radial from-primary/8 via-primary/3 to-transparent opacity-50 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/4 rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Hero Section - Full immersion */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/3" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto space-y-12 md:space-y-16">
            {/* Logo */}
            <div className="w-full max-w-[200px] mx-auto mb-8">
              <Image
                src="/smut-logo.png"
                alt="Interactive Romance Logo"
                width={140}
                height={140}
                className="w-full h-auto"
                priority
              />
            </div>
            
            {/* Main headline - bold and seductive */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.85]">
                <span className="block text-foreground">Interactive</span>
                <span className="block text-primary">Romance</span>
                <span className="block text-foreground">That</span>
                <span className="block text-accent italic font-light">
                  Responds
                </span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
                Don&apos;t just imagine your fantasies—
                <em className="text-primary">read them</em>. You guide the
                story, and the story responds.
              </p>
            </div>

            {/* Bold CTA */}
            <div className="pt-8 md:pt-12 pb-24 md:pb-32">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 md:px-16 py-4 sm:py-5 md:py-6 text-lg sm:text-xl font-bold rounded-full shadow-2xl hover:shadow-primary/20 transition-all duration-300 border border-primary/20"
                onClick={() =>
                  document
                    .getElementById("experience")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Try for Yourself
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-2 left-1/2 -translate-x-1/2 text-muted-foreground/60">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Interactive Experience Section */}
      <section id="experience" className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-card/10 to-card/30" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 sm:mb-8">
              Take <span className="text-primary italic">Control</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4">
              See how your choices create entirely different experiences
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <StoryDemo />
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12 sm:space-y-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Ready for <span className="text-primary">More</span>?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground px-4">
                Get 75% off your first three months by joining the waitlist.
              </p>
            </div>

            <div className="max-w-xl mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* Bold CTA */}
      <div className="pt-8 md:pt-12 pb-24 md:pb-32 flex flex-col items-center gap-8">
        <div id="learn-more" className={`max-w-2xl text-center space-y-4 transition-all duration-300`}>
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-accent/10 rounded-3xl blur-xl opacity-40" />

          <div className="relative bg-card/60 backdrop-blur-sm border border-accent/30 rounded-3xl overflow-hidden">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 p-4 sm:p-6 md:p-8 text-center border-b border-accent/20">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                About Our Platform
              </h3>
            </div>

            <div className="p-6 sm:p-8 md:p-12">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Experience the cross roads of romance and pick your own adventure stories. 
                  Each decision you make creates a unique path, leading to different outcomes and 
                  relationships. You pick the partner and setting and the story unfolds based on what
                  you want.. 
                </p>
                <p className="text-lg text-muted-foreground">
                  Our goal is to create the most accessible and personalizable romance stories for our
                  users to create, save, edit, and enjoy as much as they want. We will make a fun platform for
                  readers to be able to create their own stories and share with others. Let's build a
                  community together!
                </p>
                <p className="text-lg text-muted-foreground">
                  This email sign up is for us to gaige interest and have a pool of users to get feedback from so 
                  that we can make the best product for you. It helps us deliver the best experience for you so we
                  want to reward signups with a discount. This does not mean you need to subscribe or anything like that.
                  There will be a free version and we are not collecting any payment information yet. The email list
                  is just to keep you in the loop on what we are working on and when we launch. If you do decide to get
                  the premium membership after launch, you will get 75% off the first three months as a thank you. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-16 border-t border-primary/20 relative">
        <div className="absolute inset-0 bg-card/20" />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground/60">
            &copy; 2025 • Secrets Stay Safe
          </p>
        </div>
      </footer>
    </div>
  );
}
