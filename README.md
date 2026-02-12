# Heroes Of The Sea - FTC Team #34200

A modern, fast-loading website for Heroes Of The Sea, a FIRST Tech Challenge team based in Portugal.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

This generates a static site in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Tech Stack

- **Framework:** Astro 4+ (static site generation)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Fonts:** Google Sans & Google Sans Flex
- **Deployment:** Ready for Vercel, Netlify, or Cloudflare Pages

## 🎨 Design Features

- **Zero JavaScript by default** - Pure HTML/CSS for maximum performance
- **Mobile-first responsive design**
- **Flat, bold color scheme** - No gradients, clean and modern
- **Custom color palette:**
  - Primary Green: `#0E6500`
  - Gold: `#877300`
  - Bright Yellow: `#FEFE00`
  - Red: `#FC0000`
- **Accessible** - WCAG AA compliant, semantic HTML, keyboard navigation
- **Fast** - Optimized for Lighthouse 90+ scores

## 📁 Project Structure

```
/
├── src/
│   ├── components/
│   │   ├── Hero.astro          # Hero section with team name
│   │   ├── About.astro          # About FTC and team mission
│   │   ├── Fundraising.astro    # Donation form and info
│   │   ├── Team.astro           # Team members display
│   │   ├── Header.astro         # Navigation header
│   │   └── Footer.astro         # Contact and social links
│   ├── data/
│   │   └── team.json            # Team members data (editable)
│   ├── i18n/
│   │   └── translations.ts      # English/Portuguese translations
│   ├── layouts/
│   │   └── Layout.astro         # Base HTML layout
│   ├── pages/
│   │   ├── index.astro          # Main landing page
│   │   ├── team.astro           # Team page
│   │   ├── donate.astro         # Donation page
│   │   └── pt/                  # Portuguese versions
│   └── styles/
│       └── global.css           # Global styles and Tailwind
├── public/
│   └── team/                    # Team member photos
├── astro.config.mjs             # Astro configuration
├── tailwind.config.mjs          # Tailwind CSS configuration
└── package.json
```

## 🚢 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Cloudflare Pages
Connect your GitHub repository to Cloudflare Pages:
- Build command: `npm run build`
- Output directory: `dist`

## 💰 Fundraising

The site includes an embedded donation form via Hack Club Bank. Heroes Of The Sea is fiscally sponsored by The Hack Foundation (d.b.a. Hack Club), a 501(c)(3) nonprofit (EIN: 81-2908499).

**Donation Page:** https://hcb.hackclub.com/donations/start/heroesofthesea
**Financial Transparency:** https://hcb.hackclub.com/heroesofthesea/

## 📝 Customization

### Update Team Members

Team members are managed through a JSON file for easy editing:

1. **Edit team data:**
   ```bash
   src/data/team.json
   ```

2. **Add profile pictures:**
   - Place images in `public/team/` folder
   - Recommended: 200x200px square images
   - Format: JPG, PNG, or WebP

3. **JSON structure:**
   ```json
   {
     "id": "1",
     "name": "Member Name",
     "role": {
       "en": "Team Captain",
       "pt": "Capitão de Equipa"
     },
     "image": "/team/member.jpg"
   }
   ```

See `src/data/README.md` for detailed instructions.

### Update Team Information
Edit the components in `src/components/` to update:
- Team achievements and history
- Contact email in Footer.astro
- Social media links in Footer.astro

### Modify Colors
Edit `tailwind.config.mjs` to change the color scheme:
```js
colors: {
  'hots-green': '#0E6500',
  'hots-gold': '#877300',
  // ...
}
```

### Add Content Sections
Create new `.astro` components in `src/components/` and import them in `src/pages/index.astro`.

## 🌐 Domain

Configured for: **heroesofthesea.pt**

Update the `site` value in `astro.config.mjs` if deploying to a different domain.

## 📧 Contact

- **Email:** team@heroesofthesea.pt
- **Team:** FTC #34200
- **Location:** Portugal 🇵🇹

## 📄 License

© 2025 Heroes Of The Sea. All rights reserved.

---

Built with ⚓ by Heroes Of The Sea
