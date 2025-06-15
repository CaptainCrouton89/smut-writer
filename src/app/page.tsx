'use client'

import { StoryDemo } from "@/components/story-demo"
import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Dramatic lighting effects */}
      <div className="fixed inset-0 bg-gradient-radial from-primary/8 via-primary/3 to-transparent opacity-50 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/4 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-accent/6 rounded-full blur-3xl opacity-40 pointer-events-none" />
      
      {/* Hero Section - Full immersion */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/3" />
        
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Exclusive badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/15 border border-primary/30 rounded-full text-primary font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Adults Only • Discretion Guaranteed
            </div>
            
            {/* Main headline - bold and seductive */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.85]">
                <span className="block text-foreground">Your</span>
                <span className="block text-primary">Forbidden</span>
                <span className="block text-foreground">Fantasy</span>
                <span className="block text-accent italic font-light">Awaits</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Interactive erotic fiction where <em className="text-primary">your choices</em> decide 
                how deep the passion goes. Every decision shapes your desire.
              </p>
            </div>
            
            {/* Bold CTA */}
            <div className="pt-12">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-16 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-primary/20 transition-all duration-300 border border-primary/20"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Experience It Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Interactive Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-card/10 to-card/30" />
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
              Take <span className="text-primary italic">Control</span>
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              See how your choices create entirely different experiences
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <StoryDemo />
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
        
        <div className="relative container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Ready for <span className="text-primary">More</span>?
              </h2>
              <p className="text-2xl text-muted-foreground">
                Join thousands already exploring their deepest fantasies
              </p>
            </div>
            
            <div className="max-w-xl mx-auto">
              <WaitlistForm />
            </div>
            
            <p className="text-sm text-muted-foreground/60 max-w-2xl mx-auto leading-relaxed">
              By joining, you confirm you are 18+ and consent to receiving adult content. 
              Your privacy is sacred to us - we never share your information.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-primary/20 relative">
        <div className="absolute inset-0 bg-card/20" />
        <div className="relative container mx-auto px-6 lg:px-8 text-center">
          <p className="text-muted-foreground/60">
            &copy; 2024 • 18+ Only • Your Secrets Stay Safe
          </p>
        </div>
      </footer>
    </div>
  )
}