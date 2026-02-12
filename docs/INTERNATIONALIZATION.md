# Internationalization (i18n) Setup

This website now supports English (en) and Portuguese (pt) languages with a language switcher dropdown in the header.

## Structure

### Translation Files
- **`src/i18n/translations.ts`** - Central translation dictionary with all text strings for both languages

### Components
- **`src/components/Header.astro`** - Fixed thin header with language dropdown switcher and support for 3 URL hyperlinks

### Page Structure
- **English pages**: `/` and `/donate/`
- **Portuguese pages**: `/pt/` and `/pt/donate/`

## How to Use

### Adding New Content

1. **Add translation keys** to `src/i18n/translations.ts`:
```typescript
export const translations = {
  en: {
    myNewKey: 'English text here',
    // ... other keys
  },
  pt: {
    myNewKey: 'Texto em português aqui',
    // ... other keys
  },
} as const;
```

2. **Use in components** with the `getTranslation()` function:
```astro
---
import { getTranslation } from '../i18n/translations';

interface Props {
  lang?: 'en' | 'pt';
}

const { lang = 'en' } = Astro.props;
---

<p>{getTranslation(lang, 'myNewKey')}</p>
```

3. **Pass the language prop** from pages to components:
```astro
<Layout lang={lang}>
  <Hero lang={lang} />
  <Footer lang={lang} />
</Layout>
```

### Adding Header Navigation Links

The header supports up to 3 URL hyperlinks. Add them in your page by passing the `headerLinks` prop:

```astro
---
const lang = 'en';
const headerLinks = [
  { label: 'About', url: '/about' },
  { label: 'Blog', url: '/blog' },
  { label: 'Sponsors', url: '/sponsors' },
];
---

<Layout lang={lang} headerLinks={headerLinks}>
  <!-- page content -->
</Layout>
```

The header displays these links on medium screens and above (hidden on mobile for space).

## Language Switcher

The language dropdown in the header automatically shows the current language and allows switching between:
- **English** - Links to `/` and `/donate/`
- **Portuguese** - Links to `/pt/` and `/pt/donate/`

The switcher is built into the Header component and requires no additional configuration.

## Adding a New Language

To add a new language (e.g., Spanish):

1. Update `astro.config.mjs`:
```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'pt', 'es'], // Add new language
  routing: {
    prefixDefaultLocale: false,
  },
},
```

2. Add translations to `src/i18n/translations.ts`:
```typescript
export const languages = {
  en: 'English',
  pt: 'Português',
  es: 'Español', // Add here
};

export const translations = {
  en: { /* ... */ },
  pt: { /* ... */ },
  es: { /* all translation keys */ }, // Add here
};
```

3. Create translated page files:
- `src/pages/es/index.astro`
- `src/pages/es/donate.astro`

4. Update language type if needed:
```typescript
export type Language = 'en' | 'pt' | 'es';
```

## Current Translations

All major sections are translated:
- Header navigation
- Hero section
- Fundraising page
- Footer
- Navigation links

## Build & Deploy

The build process automatically generates all language variants:
```bash
npm run build
```

This creates:
- `/index.html` (English)
- `/donate/index.html` (English)
- `/pt/index.html` (Portuguese)
- `/pt/donate/index.html` (Portuguese)
