"use client";

import { useMutation } from "convex/react";
import { useState } from "react";
import { api } from "../../convex/_generated/api";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const addToWaitlist = useMutation(api.waitlist.add);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addToWaitlist({ email });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to join waitlist");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="w-full max-w-lg mx-auto text-center space-y-6 sm:space-y-8 relative px-4">
        {/* Flowing success curves */}
        <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full opacity-30"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            fill="none"
          >
            <defs>
              <linearGradient
                id="successGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="currentColor"
                  stopOpacity="0.2"
                  className="text-primary"
                />
                <stop
                  offset="100%"
                  stopColor="currentColor"
                  stopOpacity="0.1"
                  className="text-accent"
                />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  values="0,0; 8,4; 0,0"
                  dur="30s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
            <path
              d="M-5,50 Q20,20 45,50 Q70,80 105,35 L105,100 L-5,100 Z"
              fill="url(#successGradient)"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 2,1; 0,0"
                dur="30s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>

        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-xl opacity-60" />

        <div className="relative bg-card/60 backdrop-blur-sm border border-primary/30 rounded-3xl p-6 sm:p-8 md:p-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="text-4xl sm:text-5xl md:text-6xl">🔥</div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-primary">
                You&apos;re in! Thanks for joining us.
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                You&apos;re now part of an exclusive community. We&apos;ll
                notify you first when we launch with your special 75% discount
                locked in.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm font-medium text-primary">
                <span>🎉</span>
                <span>Your early access discount is secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg mx-auto relative px-4">
      {/* Subtle form curves */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient
              id="formGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="currentColor"
                stopOpacity="0.1"
                className="text-accent"
              />
              <stop
                offset="100%"
                stopColor="currentColor"
                stopOpacity="0.15"
                className="text-primary"
              />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                values="0,0; 6,2; 0,0"
                dur="55s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
          <path
            d="M-5,25 Q35,15 70,25 Q85,35 105,20 L105,100 L-5,100 Z"
            fill="url(#formGradient)"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 1.5,0.5; 0,0"
              dur="55s"
              repeatCount="indefinite"
            />
          </path>
          <path
            d="M-5,65 Q45,55 105,65"
            stroke="url(#formGradient)"
            strokeWidth="0.5"
            fill="none"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; -1,1; 0,0"
              dur="70s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl blur-xl opacity-40" />

      <div className="relative bg-card/60 backdrop-blur-sm border border-primary/30 rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 p-4 sm:p-6 md:p-8 text-center border-b border-primary/20">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-2">
              <span>Join 500+ early access members</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground">
              Join Our Early Access Community
            </h3>
            <div className="space-y-2">
              <p className="text-base sm:text-lg text-muted-foreground">
                Be part of something extraordinary. Early access to our
                interactive stories platform
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 border border-primary/30 rounded-full">
                <span className="text-xs font-medium text-primary">
                  LIMITED TIME
                </span>
                <span className="text-sm text-muted-foreground">•</span>
                <span className="text-sm font-semibold text-primary">
                  75% OFF
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Benefits */}
          <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl">
            <h4 className="text-sm font-semibold text-primary mb-3">
              Early Access Benefits:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>75% off first 3 months</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>Exclusive early access</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>Priority feature requests</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span>Direct input on features</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <label className="block text-sm font-medium text-muted-foreground text-left">
                Your email address
              </label>
              <Input
                type="email"
                placeholder="enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full h-12 sm:h-14 px-4 sm:px-6 text-base sm:text-lg bg-input/60 border-primary/30 focus:border-primary/60 rounded-xl placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
              />
              {error && (
                <p className="text-sm text-red-500 text-left">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full h-12 sm:h-14 bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {loading ? (
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  <span className="hidden sm:inline">
                    Securing your access...
                  </span>
                  <span className="sm:hidden">Securing...</span>
                </div>
              ) : (
                "Claim Your Early Access"
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
