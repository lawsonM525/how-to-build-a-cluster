# Cluster Guide Client

An interactive guide and boilerplate for building compute clusters, built with React, TypeScript, and Tailwind CSS.

## Features

- **Interactive Guide Structure**: Organized into 7 Parts:
  1. Conceptual Foundations
  2. Hardware Engineering
  3. Software Foundation
  4. Infrastructure Services
  5. The Workload Manager
  6. Parallel Programming
  7. Validation & Security
- **Minimalist Design**:
  - **Dark Mode**: High contrast, white text on black background (The Robots theme).
  - **Light Mode**: Accessible black text on white background.
  - **Theme Toggle**: Switch between modes via the bottom navigation bar.
- **Reader Mode Layout**: Centered content with minimized distractions.
- **Reusable Components**:
  - `Terminal`: Styled terminal window for command outputs (Themed).
  - `CodeBlock`: Syntax highlighting-ready code blocks with copy functionality (Themed).
  - `Note`: Callout boxes for info, warnings, and success messages (Themed).
  - `Sidebar`: Slide-over navigation for all screen sizes.
  - `BottomNav`: Persistent navigation controls and theme toggle.
- **Tech Stack**:
  - React 19
  - TypeScript
  - Vite
  - Tailwind CSS v3
  - Framer Motion
  - Lucide React
  - React Router v7

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
client/
├── src/
│   ├── components/    # Reusable UI components (CodeBlock, Terminal, etc.)
│   ├── data/          # Static data (navigation structure)
│   ├── layouts/       # Page layouts (MainLayout)
│   ├── pages/         # Route components
│   ├── App.tsx        # Routing configuration
│   ├── index.css      # Global styles and Tailwind directives
│   └── main.tsx       # Entry point
├── tailwind.config.js # Theme configuration
└── vite.config.ts     # Vite configuration
```

## Customization

- **Navigation**: Update `src/data/navigation.ts` to add or modify chapters.
- **Theme**: Edit `tailwind.config.js` to change the color palette.
- **Content**: Add new pages in `src/pages/` and register them in `src/App.tsx`.
