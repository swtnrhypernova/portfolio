# jenn.dev — a macOS-style developer portfolio

**Live site → https://your-site.vercel.app**

A portfolio that behaves like a Mac desktop: a lock screen with a live clock, a Dynamic Island nav that shrinks on scroll, macOS windows with traffic lights, a fish-eye dock, and an iMessage-style contact window — built from scratch in Next.js, with light/dark themes and pastel "Sayonani × Apple" styling.

## Features

- 🔐 **Lock screen hero** — live clock, pulsing avatar ring, "Enter Password" pill that unlocks/scrolls into the desktop
- 🖥 **Dynamic Island nav** — shrinks on scroll, one-click CV download, theme toggle
- 🗂 **Mac windows** — traffic lights, scroll-reveal animations, `stack.txt`, `about.txt`, `results.zip`, and a bento projects grid
- 🐟 **macOS dock** — spring-physics fish-eye magnification with name tooltips
- 💬 **iMessage-style contact** — chat-bubble UI with email and social links
- 🌗 **Light & dark themes** — system-aware, persisted, pastel palette throughout
- 📄 **CV download** — served from the site, one click from island or dock

## Built with

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (custom pastel design tokens)
- **Framer Motion** (entrance, scroll-reveal, and spring animations)

## Projects showcased
   Project | What it is |
 | --- | --- |
 | [Auctionary](https://github.com/swtnrhypernova/auctionary-showcase) | Full-stack auction platform — Vue, Node, Express, SQLite |
 | [TechCord](https://techcord-website.vercel.app) | Team-built news platform + Discord bot — live on Vercel |
 | [Board Game Simulation](https://github.com/swtnrhypernova/board-game-simulation-showcase) | Java 21 console game with Strategy/Observer/Decorator patterns |

## Run it locally

```bash
git clone https://github.com/swtnrhypernova/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  page.tsx            # lock screen, desktop grid, bento, messages, footer
  layout.tsx          # fonts, theme provider
  globals.css         # Tailwind theme tokens + dark variant
components/
  LockScreen.tsx      # live clock + unlock pill
  DynamicIsland.tsx   # shrinking nav
  MacWindow.tsx       # traffic-light window shell
  Wallpaper.tsx       # drifting pastel blobs
  Dock.tsx            # fish-eye dock
```

## Contact

- **Email:** jennifer.okoroaforx@gmail.com
- **GitHub:** https://github.com/swtnrhypernova
- **LinkedIn:** https://www.linkedin.com/in/swtnrhypernova

© 2026 Chisom Jennifer Okoroafor