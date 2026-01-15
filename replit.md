# Olive Mega Mall

A React + TypeScript e-commerce web application for a supermarket in Agbor, Delta State.

## Overview

This is a single-page application (SPA) built with:
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling (via CDN)
- **Lucide React** - Icons

## Project Structure

```
/
├── components/           # React components
│   ├── dashboard/        # Dashboard-related components
│   │   ├── Addresses.tsx
│   │   ├── Cart.tsx
│   │   ├── Orders.tsx
│   │   ├── Overview.tsx
│   │   ├── Settings.tsx
│   │   └── Wishlist.tsx
│   ├── About.tsx
│   ├── BottomNav.tsx
│   ├── CategoryGrid.tsx
│   ├── Contact.tsx
│   ├── Dashboard.tsx
│   ├── Features.tsx
│   ├── FloatingButton.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Products.tsx
│   └── QuickViewModal.tsx
├── App.tsx               # Main application component
├── constants.ts          # Application constants
├── index.html            # HTML entry point
├── index.tsx             # React entry point
├── package.json          # Dependencies
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Running the Application

The application runs on port 5000 with the following command:
```bash
npm run dev
```

## Features

- Product browsing by category
- Shopping cart functionality
- User dashboard with:
  - Order history
  - Wishlist
  - Address management
  - Account settings
- Contact information
- Responsive design

## Environment Variables

- `GEMINI_API_KEY` - Optional API key for Gemini integration (if used)
