# NoRadio — Personal Affirmation Radio Hub

A calm-tech web experience for reflection, daily affirmations, and radio listening. Built with **Next.js 16 (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Design System

Implements the NoRadio design system (Modern Minimalist with Tonal Warmth):

- **Primary**: Deep burgundy `#570013` / `#800020`
- **Surfaces**: Warm cream & rose neutrals (`#fff8f5`, `#f5ece7`, …)
- **Typography**: Manrope (geometric sans)
- **Shape language**: Soft rounded corners, glassmorphism player, soft primary-tinted shadows

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero affirmation, personal message card, favorite radio stations |
| `/daily-reminders` | Interactive affirmation cards (Morning / Focus / Evening) + Collected Wisdom bento |
| `/personal-message` | Focused personal affirmation view |

Shared: sticky Navbar, Footer, persistent glass Audio Player.

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (Manrope, Navbar, Footer, Player)
│   ├── page.tsx            # Home
│   ├── daily-reminders/
│   │   └── page.tsx
│   ├── personal-message/
│   │   └── page.tsx
│   └── globals.css         # Design tokens + utilities
└── components/
    ├── Navbar.tsx
    ├── Footer.tsx
    └── AudioPlayer.tsx
```

## Notes

- Radio player UI is present and interactive (play/pause state); actual streaming can be wired later.
- External hero/quote imagery uses the provided Google-hosted assets from the design mockups.
- Material Symbols Outlined for icons.

## Next Steps (backend / features)

- Real radio streams / playlist API
- User accounts & saved affirmations
- “Draw a card” randomization
- Personal message editor
