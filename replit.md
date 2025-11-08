# Madhav Sweets - Menu Display Application

## Overview
A React-based menu display website for Madhav Sweets, showcasing traditional Indian sweets with prices. The application provides an elegant, mobile-responsive interface for customers to view the sweet shop's offerings.

## Technologies Used
- **Frontend Framework**: React 18.3
- **Build Tool**: Vite 5.4
- **Language**: TypeScript
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM

## Project Structure
```
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/          # shadcn/ui components
│   │   ├── Header.tsx   # App header with branding
│   │   ├── MenuSection.tsx # Menu item display
│   │   └── NavLink.tsx  # Navigation links
│   ├── pages/           # Page components
│   │   ├── Index.tsx    # Main menu page
│   │   └── NotFound.tsx # 404 page
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── public/              # Static assets
└── index.html          # HTML template
```

## Development
- **Port**: 5000 (configured for Replit)
- **Host**: 0.0.0.0 (allows proxy access)
- **Dev Server**: Vite with HMR (Hot Module Replacement)

## Features
- Traditional Sweets menu (Kesar Peda, Malaai Peda, etc.)
- Premium Sweets (Kaju Katari, Pista Roll, etc.)
- Barfi Collection
- Special Items (Gulab Jambu, Kalajam, Basundi)
- Shreekhand Varieties
- Drinks & Beverages (Lassi varieties)
- Contact information with direct call button
- Responsive design for mobile and desktop
- Clean, modern UI with card-based layout

## Recent Changes
- **2024-11-08**: Initial Replit setup
  - Configured Vite to use port 5000 with allowed hosts
  - Fixed JSX syntax errors in Index.tsx
  - Renamed Lassi variable to drinks for consistency
  - Installed Node.js 20 and dependencies
  - Set up dev-server workflow
