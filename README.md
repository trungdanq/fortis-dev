# Fortis Asia Landing Page

A modern, responsive landing page built with React, TypeScript, Tailwind CSS, and Radix UI, inspired by the Fortis Asia website.

## Features

- 🎨 Modern and responsive design
- ⚡ Built with Vite for fast development
- 🏗️ TypeScript for type safety
- 🎨 Tailwind CSS for utility-first styling
- 🧩 Radix UI components for accessibility
- 📱 Mobile-first responsive design
- 🔥 Modern React with hooks

## Tech Stack

- **React 18** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── HeroSection.tsx # Hero/banner section
│   ├── StorySection.tsx # About/story section
│   ├── FocusSection.tsx # Four categories section
│   ├── PartnersSection.tsx # Partners/distribution
│   ├── ContactSection.tsx # Contact information
│   └── Footer.tsx      # Footer component
├── lib/                # Utility functions
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Sections

The landing page includes the following sections:

1. **Header** - Navigation with dropdown menus and language selector
2. **Hero** - "Connoisseurs of Quality" main banner
3. **Story** - Company information and statistics
4. **Focus** - Four main product categories (Confectionery, Beverages, Beauty, Personal Care)
5. **Partners** - Distribution network and partner information
6. **Contact** - Office locations and contact details
7. **Footer** - Links and company information

## Customization

- Colors and styling can be customized in `tailwind.config.js`
- Component styles use Tailwind utility classes
- Icons from Lucide React can be easily swapped
- All content is easily editable in the respective component files

## License

This project is for demonstration purposes.
