# Cut It Saloon - Next.js Frontend

This is a Next.js application for Cut It Saloon & Spa, migrated from Create React App.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
yarn install
# or
npm install
# or
pnpm install
```

2. Run the development server:
```bash
yarn dev
# or
npm run dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   └── globals.css        # Global styles
├── src/
│   ├── components/        # React components
│   │   ├── Common/       # Shared components
│   │   ├── Layout/       # Layout components
│   │   ├── Sections/     # Page sections
│   │   └── ui/           # ShadCN UI components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities
├── public/                # Static assets
│   └── images/           # Image files
└── next.config.js        # Next.js configuration
```

## 🛠️ Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🎨 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TailwindCSS** - Utility-first CSS framework
- **ShadCN UI** - Component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📝 Migration Notes

This project was migrated from Create React App to Next.js. Key changes:

1. **Routing**: Converted from React Router to Next.js App Router
2. **File Structure**: Added `app/` directory for Next.js App Router
3. **Client Components**: Added `"use client"` directive to components using hooks or client-side features
4. **Styles**: Migrated global styles to `app/globals.css`
5. **Configuration**: Updated Tailwind and component configurations for Next.js

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
yarn build
```

Or use the [Vercel CLI](https://vercel.com/cli):

```bash
vercel
```

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
