# IPSO - AI Hospitality SaaS Landing Page

## Overview

IPSO is a conversion-focused landing page application for an AI-powered hospitality training and culture intelligence SaaS product. The application collects waitlist signups from hospitality professionals interested in early access to a "People OS" platform that transforms training, culture management, and leadership support through AI automation.

The core functionality is a single-page marketing site with a waitlist signup form that captures user information and stores it in a PostgreSQL database. The product targets hospitality teams with features like AI SOP ingestion, adaptive training, scenario simulations, and manager intelligence tools.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with hot module replacement

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (shadcn/ui primitives)
- Feature components in `client/src/components/` (HeroSection, SignupForm, FeaturePillars, etc.)

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful JSON endpoints under `/api/` prefix
- **Database ORM**: Drizzle ORM for type-safe database operations

The backend serves both the API and static files in production. In development, Vite middleware handles frontend assets with HMR support.

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Location**: `shared/schema.ts` contains table definitions
- **Migrations**: Drizzle Kit manages schema migrations in `/migrations`

Current database tables:
- `users`: Basic user accounts (id, username, password)
- `waitlist_entries`: Waitlist signups (name, email, role, company, companySize, priceRange, createdAt)

### API Structure
- `POST /api/waitlist`: Submit waitlist signup with validation
- `GET /api/waitlist/count`: Get current signup count and remaining early adopter spots

### Design System
The application follows specific design guidelines documented in `design_guidelines.md`:
- Minimal, conversion-focused design with warm cream/sand backgrounds
- Typography: Playfair Display (serif) for headlines, Nunito Sans for body text
- Color palette centered on warm neutrals with charcoal accents
- CSS custom properties for theming defined in `client/src/index.css`

## External Dependencies

### Database
- PostgreSQL database (connection via `DATABASE_URL` environment variable)
- `postgres` driver for database connections
- `drizzle-orm` and `drizzle-kit` for ORM and migrations

### UI Component Libraries
- Radix UI primitives (dialog, select, popover, toast, etc.)
- shadcn/ui component system built on Radix
- Lucide React for icons
- Embla Carousel for carousel functionality

### Form & Validation
- React Hook Form for form state management
- Zod for schema validation (shared between client and server via `drizzle-zod`)

### Build & Development
- Vite for frontend bundling and development server
- esbuild for production server bundling
- TypeScript for type safety across the stack

### Fonts
- Google Fonts: Playfair Display, Nunito Sans, DM Sans, Fira Code, Geist Mono (loaded via CDN in index.html)