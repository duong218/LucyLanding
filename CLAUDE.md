# Project Information: Lucy Landing

## Technology Stack
- **Frontend**: React 19, Vite 6
- **Styling**: Tailwind CSS 4, Framer Motion (motion/react)
- **Icons**: Lucide React
- **AI**: @google/genai (Gemini API)

## Project Structure
- `src/`
  - `components/`: Modular UI components (Navbar, Hero, Why, etc.)
  - `components/shared/`: Reusable UI elements (Logo, SectionHeading, etc.)
  - `locales/`: Multi-language content (VI, EN, ZH)
  - `context/`: React context providers (LangContext)
  - `utils/`: Helper functions (getImageUrl, scrollToId)
  - `App.jsx`: Orchestrator component.
  - `index.css`: Tailwind directives and custom styles.
  - `main.jsx`: Application entry point.
- `index.html`: Base HTML template.
- `vite.config.js`: Vite configuration with Tailwind and Gemini API key injection.
- `package.json`: Project dependencies and scripts.

## Core Commands
- `npm run dev`: Start development server (port 3000)
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run clean`: Remove build artifacts

## Development Patterns
- **Monolithic Component**: Currently, most logic and UI are in `App.jsx`. Consider refactoring into a component-based structure if complexity increases.
- **Multi-language**: Content is managed via a `content` object and `LangContext`.
- **Styling**: Uses Tailwind CSS utilities combined with custom animations via Framer Motion.
