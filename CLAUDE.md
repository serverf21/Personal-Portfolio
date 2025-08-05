# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React and Create React App. It's a single-page application showcasing personal information, skills, projects, education, and contact details with smooth scrolling navigation and animated components.

## Development Commands

- `npm start` - Start development server (opens at http://localhost:3000)
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (irreversible)

## Architecture & Key Technologies

### Core Stack
- **React 18** - Main framework using functional components with hooks
- **Create React App** - Build tooling and development environment
- **Tailwind CSS** - Primary styling framework with custom configuration
- **Framer Motion** - Animation library for page transitions and component animations
- **React Bootstrap** - Additional UI components

### Key Libraries
- **react-type-animation** - Typewriter effect animations
- **react-scroll** - Smooth scrolling navigation between sections
- **react-toastify** - Toast notifications for form submissions
- **react-spinners** - Loading spinner components
- **react-icons** - Icon library (FontAwesome, Simple Icons, Hero Icons)
- **react-vertical-timeline-component** - Timeline components for education section

### Firebase Integration
- Contact form submissions are sent to Firebase Realtime Database
- Endpoint: `https://personal-portfolio-d8375-default-rtdb.firebaseio.com/sarvagyacontact.json`

## Project Structure

```
src/
├── App.js              # Main app component with loading state and layout
├── index.js            # React app entry point
├── index.css           # Global styles and Tailwind imports
├── variants.js         # Framer Motion animation variants
├── components/         # All React components
│   ├── Banner.js       # Hero section with typewriter animation
│   ├── About.js        # About section
│   ├── Skills.js       # Skills showcase
│   ├── Work.js         # Projects/portfolio section
│   ├── Services.js     # Services offered
│   ├── Education.js    # Education timeline
│   ├── Contact.js      # Contact form with Firebase integration
│   ├── Header.js       # Site header
│   ├── Nav.js          # Navigation menu
│   ├── Footer.js       # Site footer
│   ├── Github.js       # GitHub integration component
│   └── BackToHome.js   # Back to top button
└── assets/             # Images and static assets
```

## Component Patterns

### Animation System
- All components use Framer Motion with `variants.js` for consistent animations
- Standard pattern: `fadeIn(direction, delay)` for entrance animations
- Components use `initial="hidden" whileInView={'show'}` for scroll-triggered animations

### Navigation
- Uses `react-scroll` for smooth scrolling between sections
- Each section has an `id` attribute matching navigation links
- Navigation is handled in `Nav.js` component

### Form Handling
- Contact form in `Contact.js` uses controlled components with state management
- Form submissions are sent to Firebase Realtime Database
- Toast notifications provide user feedback

## Styling System

### Tailwind Configuration
- Custom color palette: primary (`#0a0a0a`), accent (`#ba40c3`)
- Custom fonts: Orbitron (primary), Rajdhani (secondary), Aldrich (tertiary)
- Custom background images defined in `tailwind.config.js`
- Responsive breakpoints: sm(640px), md(768px), lg(960px), xl(1200px)

### Key Design Elements
- Dark theme with gradient backgrounds
- Responsive design for all device sizes
- Loading screen with climbing box loader animation
- Smooth animations and transitions throughout

## Development Notes

- The app includes a 4-second loading screen on initial load
- All components are responsive and mobile-first designed
- Images are stored in `src/assets/` with organized subdirectories
- The portfolio showcases various projects with preview images
- Contact form requires name, email, and message fields