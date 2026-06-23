# Next Wave Technology — B2B Mobile Accessories Website

A static, fully responsive B2B marketing website for **Next Wave Technology** — a white-label OEM/ODM supplier of premium mobile accessories across India. Built with React 19 + Vite 8 + Tailwind CSS v4.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS v4 |
| Routing | React Router DOM v7 |
| Slider | Swiper v12 |
| Scroll Animations | AOS |
| Special Animations | GSAP v3 |
| Font (Headings) | Lato — self-hosted via `@fontsource/lato` |
| Font (Labels / UI) | Montserrat — Google Fonts CDN |
| Font (Body) | Poppins — Google Fonts CDN |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── assets/                  # Static images and brand assets
│   ├── vipin-logo.webp
│   ├── vipin-favicon.webp
│   └── hero.png             # Placeholder — replace with real product images
│
├── components/
│   ├── Header.jsx           # Sticky header — topbar, logo, nav, left-slide mobile drawer
│   ├── Footer.jsx           # 4-column footer with contact info and social links
│   ├── HeroSwiper.jsx       # Full-width hero carousel (Swiper + Autoplay)
│   ├── MarqueeBanner.jsx    # Infinite GSAP text marquee (black band)
│   ├── CategorySection.jsx  # 6-category icon grid
│   ├── FeaturedProducts.jsx # Home page product swiper blocks (Neckband, TWS, Power Bank)
│   ├── HowToOrder.jsx       # 4-step process section
│   ├── WhyChooseUs.jsx      # 4 feature cards with icons
│   ├── ManufacturingBanner.jsx # Full-bleed dark banner + stats strip
│   ├── CTABanners.jsx       # Bento-style CTA grid (3 cards)
│   ├── FAQSection.jsx       # Accordion FAQ (10 questions)
│   ├── ClientMarquee.jsx    # Dual-row infinite Swiper client logo marquee
│   ├── FloatingContact.jsx  # Fixed bottom-right contact widget (WhatsApp / Call / Email)
│   ├── StatsBanner.jsx      # Black stats band (standalone, used on other pages)
│   ├── Preloader.jsx        # GSAP entrance preloader
│   └── SwiperComm.jsx       # Shared Swiper wrapper utility
│
├── pages/
│   ├── Home.jsx             # Full homepage assembling all sections
│   ├── About.jsx            # Brand story, values, stats, CTA
│   ├── Contact.jsx          # Mailto contact form + direct contact details
│   ├── CategoryPage.jsx     # Dynamic category page (/categories/:slug)
│   ├── PrivacyPolicy.jsx    # Legal — privacy policy
│   ├── Terms.jsx            # Legal — terms & conditions
│   └── NotFound.jsx         # 404 page
│
├── data/
│   └── products.js          # Single source of truth for all product data
│                            # Used by both CategoryPage and FeaturedProducts
│
├── App.jsx                  # Router setup (createBrowserRouter, lazy loading)
├── Layout.jsx               # Shared layout — Header + Outlet + Footer + FloatingContact
├── main.jsx                 # Entry — AOS init, Lato font imports
└── index.css                # Global styles, Tailwind v4 import, Swiper overrides
```

---

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Home | Full marketing homepage |
| `/about` | About | Brand story and values |
| `/contact` | Contact | Enquiry form (mailto) + direct contact |
| `/categories/:slug` | CategoryPage | Dynamic page per product category |
| `/privacy-policy` | PrivacyPolicy | Privacy policy |
| `/terms` | Terms | Terms & conditions |
| `*` | NotFound | 404 fallback |

### Category slugs

`neckband` · `tws` · `power-bank` · `charger` · `cable` · `smart-watch`

---

## Design System

### Colors
- **Black** `#000000` — primary backgrounds, headings, CTAs
- **White** `#ffffff` — content backgrounds, reverse text
- **Gray scale** — `gray-50` sections, `gray-100/200` borders, `gray-400/500` body text
- No color accents. Strictly black and white.

### Typography

| Role | Font | Weights |
|---|---|---|
| Section headings (h1, h2, h3) | **Lato** | 300, 400, 700, 900 |
| Labels, badges, buttons, nav | **Montserrat** | 600, 700, 800, 900 |
| Body copy, descriptions | **Poppins** | 300, 400, 500, 600 |

> Lato is self-hosted via `@fontsource/lato` (no CDN dependency).  
> Montserrat and Poppins are loaded from Google Fonts.

### Design Rules
- No border-radius (sharp corners everywhere)
- AOS `fade-up` for all scroll-reveal animations (`once: true`, `duration: 700`)
- GSAP for the MarqueeBanner continuous scroll
- `clamp()` for fluid responsive typography and sizing in HeroSwiper
- Tailwind v4 canonical classes — `shrink-0`, `h-105`, `max-w-50`, etc.

---

## Product Data

All product content lives in a single file:

```
src/data/products.js
```

Both `CategoryPage` and `FeaturedProducts` import from here. To update a product or add a category, edit only this file.

**Structure per category:**
```js
{
  tag: "Wireless Audio",        // small label above hero heading
  heading: "Neckband",          // used in cards, swiper headers
  heroHeading: "Superior\nWireless Sound",  // \n = line break in hero h1
  badgeIcon: "headphone",       // "headphone" | "battery" | "zap" | "heart"
  description: "...",
  features: ["Bluetooth 5.0+", ...],
  items: [
    { model: "NB-355", name: "Bluetooth Neckband Earphone", spec: "Up to 20 Hrs Battery", image: heroImg },
    ...
  ]
}
```

---

## Contact & Business Details

| Field | Value |
|---|---|
| Phone | +91 74044 58619 |
| Email | nextwavemobile1@gmail.com |
| WhatsApp | wa.me/917404458619 |

> Update the address placeholder in `Contact.jsx` and `Footer.jsx` once confirmed.

---

## Pending Placeholders

| Item | Location | Action needed |
|---|---|---|
| Product images | `src/data/products.js` — all `image: heroImg` | Replace with real product photos |
| Manufacturing photo | `ManufacturingBanner.jsx` — commented import | Add factory/production image |
| Client logos | `ClientMarquee.jsx` — `clients` array | Add `logo:` import to each client |
| Business address | `Contact.jsx`, `Footer.jsx` | Fill in actual address |
| Google Maps embed | `Footer.jsx` | Replace placeholder `src` with real embed URL |
| Social links | `Header.jsx`, `Footer.jsx` — all `href="#"` | Set real social profile URLs |
| Catalogue PDF | Header & mobile drawer — "Download Catalogue" `href="#"` | Link to real PDF |

---

## Scripts

```bash
npm run dev       # Vite dev server with HMR
npm run build     # Production bundle (dist/)
npm run preview   # Serve production bundle locally
npm run lint      # ESLint check
```
