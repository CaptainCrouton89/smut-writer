# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an interactive erotic fiction platform built with Next.js 15 and React 19. The application features a landing page with a story demo that showcases interactive storytelling where user choices shape the narrative flow. The project uses TypeScript and is styled with Tailwind CSS and shadcn/ui components.

## Development Commands

- `pnpm dev` - Start development server with Turbopack (preferred)
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality checks

## Architecture

### Component Structure

- **Interactive Demo**: `src/components/story-demo.tsx` contains the core story branching logic with predefined story states and choice handling
- **Form Components**: `src/components/waitlist-form.tsx` handles email collection with mock API simulation
- **UI Library**: Uses shadcn/ui components in `src/components/ui/` (Button, Card, Input)

### Story State Management

The story demo uses a simple state machine pattern where each story state has text content and optional choices that lead to other states. Story progression is handled by updating the current state based on user selection.

### Styling & Design

- Uses Tailwind CSS v4 with CSS variables for theming
- Component styling follows shadcn/ui "new-york" style conventions
- Design features gradient backgrounds, blur effects, and primary color theming
- Path aliases configured: `@/components`, `@/lib/utils`, `@/components/ui`

## Package Management

Project uses pnpm for package management (evidenced by pnpm-lock.yaml). Always use `pnpm` commands rather than npm.

## Deployment & Hosting

- Public URL: https://prereg.daytimereadinglist.com
