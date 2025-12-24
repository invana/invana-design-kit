# Theming System

A comprehensive theming system for the Invana Design Kit that supports multiple themes with light and dark variants.

## Overview

The theming system provides:
- **Multiple themes**: Default (Invana), Tailwind, and Vite inspired themes
- **Light and dark variants** for each theme
- **Easy theme switching** via Storybook toolbar
- **Type-safe theme management** with TypeScript
- **CSS-based themes** for optimal performance

## Available Themes

### 1. Default (Invana)
- **Light**: `default-light`
- **Dark**: `default-dark`
- **Description**: Invana brand theme with green accents
- **Best for**: Invana applications and products

### 2. Tailwind
- **Light**: `tailwind-light`
- **Dark**: `tailwind-dark`
- **Description**: Inspired by tailwindcss.com with blue/cyan accents
- **Best for**: Professional, corporate applications

### 3. Vite
- **Light**: `vite-light`
- **Dark**: `vite-dark`
- **Description**: Inspired by vite.dev with purple/violet accents
- **Best for**: Modern, developer-focused applications

## Installation & Setup

### 1. Package Structure

```
packages/styling/
├── src/
│   ├── themes/
│   │   ├── default.css      # Invana theme
│   │   ├── tailwind.css     # Tailwind theme
│   │   └── vite.css         # Vite theme
│   ├── themes.config.ts     # Theme configuration & utilities
│   ├── index.css            # Base theme tokens
│   ├── base.css             # Base styles
│   └── theme.css            # Legacy theme file
└── package.json
```

### 2. Import Themes in Your App

In your main CSS file (e.g., `apps/storybook/src/styles.css`):

```css
@import "tailwindcss";

/* Define your source paths */
@source "../stories/**/*.{js,ts,jsx,tsx,mdx}";
@source "../../packages/ui/src/**/*.{js,ts,jsx,tsx}";

/* Import base theme */
@import "@invana/styling/index.css";

/* Import all theme variants */
@import "@invana/styling/themes/default";
@import "@invana/styling/themes/tailwind";
@import "@invana/styling/themes/vite";
```

## Usage

### Using Theme Utilities (TypeScript)

```typescript
import { 
  themes, 
  applyTheme, 
  getAllThemeVariants,
  getThemeById,
  getThemeVariantById 
} from '@invana/styling/themes';

// Apply a theme
applyTheme('tailwind-dark');

// Get all available themes
const allThemes = themes;

// Get all theme variants (flattened)
const variants = getAllThemeVariants();

// Get specific theme
const tailwindTheme = getThemeById('tailwind');

// Get specific variant
const variant = getThemeVariantById('vite-light');
```

### Using Data Attributes (HTML)

```html
<html data-theme="vite-light">
  <body>
    <!-- Your app content -->
  </body>
</html>
```

### Using CSS Classes

```html
<div class="theme-tailwind-dark">
  <!-- This section will use Tailwind dark theme -->
</div>
```

## Storybook Integration

The Storybook preview is already configured with theme switching:

```typescript
// apps/storybook/.storybook/preview.tsx
import { 
  themes, 
  getStorybookThemeItems, 
  applyTheme,
  getDefaultThemeVariant 
} from "@invana/styling/themes";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: getDefaultThemeVariant().id,
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: getStorybookThemeItems(),
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const themeVariantId = context.globals.theme || getDefaultThemeVariant().id;
      useEffect(() => {
        applyTheme(themeVariantId);
      }, [themeVariantId]);
      return <Story />;
    },
  ],
};
```

## Creating a New Theme

### 1. Create Theme CSS File

Create a new file in `packages/styling/src/themes/mytheme.css`:

```css
/* Light mode */
[data-theme="mytheme-light"],
.theme-mytheme-light {
  /* Raw HSL values for opacity modifiers */
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --primary: 200 100% 50%;
  --primary-foreground: 0 0% 100%;
  /* ... more color tokens ... */

  /* Full HSL colors for direct use */
  --color-background: hsl(0 0% 100%);
  --color-foreground: hsl(222 47% 11%);
  --color-primary: hsl(200 100% 50%);
  --color-primary-foreground: hsl(0 0% 100%);
  /* ... more color tokens ... */
}

/* Dark mode */
[data-theme="mytheme-dark"],
.theme-mytheme-dark {
  /* Dark variant colors */
}
```

### 2. Update themes.config.ts

```typescript
export const themes: Theme[] = [
  // ... existing themes
  {
    id: 'mytheme',
    name: 'My Theme',
    description: 'My custom theme description',
    variants: [
      { id: 'mytheme-light', name: 'My Theme Light', mode: 'light', icon: 'sun' },
      { id: 'mytheme-dark', name: 'My Theme Dark', mode: 'dark', icon: 'moon' }
    ]
  }
];
```

### 3. Update package.json

```json
{
  "exports": {
    "./themes/mytheme": "./src/themes/mytheme.css"
  }
}
```

### 4. Import in Your App

```css
@import "@invana/styling/themes/mytheme";
```

## Color Tokens

Each theme defines the following color tokens:

### Semantic Colors
- `background` / `foreground` - Base page colors
- `primary` / `primary-foreground` - Primary brand color
- `secondary` / `secondary-foreground` - Secondary accent color
- `accent` / `accent-foreground` - Accent highlights
- `muted` / `muted-foreground` - Muted backgrounds and text
- `destructive` / `destructive-foreground` - Error/danger states
- `card` / `card-foreground` - Card backgrounds
- `popover` / `popover-foreground` - Popover/dropdown backgrounds

### Functional Colors
- `border` - Border colors
- `input` - Input field borders
- `ring` - Focus ring colors

### Usage in Components

```tsx
<div className="bg-background text-foreground">
  <button className="bg-primary text-primary-foreground">
    Primary Button
  </button>
  <div className="bg-card text-card-foreground border">
    Card Content
  </div>
</div>
```

## Best Practices

1. **Always use semantic tokens**: Use `bg-primary` instead of `bg-blue-500` for theme consistency
2. **Test both variants**: Always test your components in both light and dark variants
3. **Maintain contrast**: Ensure sufficient contrast between foreground and background colors
4. **Use CSS variables directly**: For custom styles, use `var(--color-primary)` or `hsl(var(--primary))`

## Theme Configuration API

### Types

```typescript
interface ThemeVariant {
  id: string;
  name: string;
  mode: 'light' | 'dark';
  icon?: string;
}

interface Theme {
  id: string;
  name: string;
  description: string;
  variants: ThemeVariant[];
}
```

### Functions

- `getAllThemeVariants()` - Get flattened list of all theme variants
- `getThemeById(id)` - Get theme by ID
- `getThemeVariantById(id)` - Get specific variant by ID
- `getDefaultThemeVariant()` - Get default theme variant
- `applyTheme(variantId)` - Apply theme to document
- `getStorybookThemeItems()` - Get theme items for Storybook toolbar

## Examples

See the **Theme Showcase** story in Storybook for live examples and demonstrations.

## Troubleshooting

### Themes not switching
- Ensure all theme CSS files are imported in your main CSS file
- Check that `data-theme` attribute is being set on the root element
- Verify theme CSS files are being bundled

### Colors not working
- Make sure you're using semantic color tokens (`bg-primary` not `bg-blue-500`)
- Check that the base theme CSS is imported before theme variants
- Verify Tailwind CSS v4 is properly configured

### TypeScript errors
- Ensure `@invana/styling` is properly installed
- Check that theme exports are configured in package.json
- Verify import paths match package exports

## Contributing

When adding new themes:
1. Follow the existing theme structure
2. Provide both light and dark variants
3. Test accessibility and contrast ratios
4. Update this documentation
5. Add examples to the Theme Showcase story
