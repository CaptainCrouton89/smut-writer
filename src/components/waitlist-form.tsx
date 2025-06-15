'use client'

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setLoading(false)
  }

  if (submitted) {
    return (
      <div className="w-full max-w-lg mx-auto text-center space-y-8 relative">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl opacity-60" />
        
        <div className="relative bg-card/60 backdrop-blur-sm border border-primary/30 rounded-3xl p-12">
          <div className="space-y-6">
            <div className="text-6xl">🔥</div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-primary">Welcome to the Inner Circle</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your invitation has been secured. We'll reach out privately when your exclusive access is ready.
              </p>
            </div>
            
            <div className="pt-4 border-t border-primary/20">
              <p className="text-sm text-muted-foreground/80">
                Check your email for a special surprise from us.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-lg mx-auto relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl blur-xl opacity-40" />
      
      <div className="relative bg-card/60 backdrop-blur-sm border border-primary/30 rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-8 text-center border-b border-primary/20">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Request Private Access</h3>
            <p className="text-lg text-muted-foreground">
              Join thousands exploring their deepest desires in complete privacy
            </p>
          </div>
        </div>
        
        {/* Form */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-muted-foreground">
                Your private email address
              </label>
              <Input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-14 px-6 text-lg bg-input/60 border-primary/30 focus:border-primary/60 rounded-xl placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={loading}
              size="lg"
              className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Securing your access...
                </div>
              ) : (
                'Request Invitation'
              )}
            </Button>
          </form>
          
          <div className="mt-6 pt-6 border-t border-primary/20 text-center space-y-3">
            <p className="text-sm text-muted-foreground/80">
              <span className="text-accent">✓</span> 100% Private & Secure
            </p>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              We respect your privacy absolutely. Your email stays confidential and you can leave anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}