# BETA Design System

## The Prism Aesthetic

> **"Simple but not simple"** — Minimalist layouts with complex, rich lighting effects.

Our visual identity is inspired by light refracting through a prism: deep void backgrounds illuminated by spectral gradient accents that shift between cyan, magenta, and white.

---

## 🎨 Core Palette

### Void Background
```css
/* The deepest black - our canvas */
--background: 0 0% 1%;           /* #030303 - Near pure black */
--background-elevated: 0 0% 4%;  /* #0a0a0a - Subtle lift */
--background-surface: 0 0% 6%;   /* #0f0f0f - Card surfaces */
```

### Spectral Accents (Prism Gradients)
```css
/* The signature prismatic glow - light through a prism */
--spectral-cyan: 180 100% 60%;    /* #33ffff */
--spectral-magenta: 300 100% 60%; /* #ff33ff */
--spectral-white: 0 0% 100%;      /* #ffffff */

/* Gradient definitions */
--spectral-gradient: linear-gradient(
  90deg,
  hsl(180, 100%, 60%) 0%,
  hsl(240, 100%, 70%) 25%,
  hsl(280, 100%, 65%) 50%,
  hsl(320, 100%, 60%) 75%,
  hsl(0, 0%, 100%) 100%
);

/* Glow effect for borders and accents */
--spectral-glow: 0 0 20px rgba(51, 255, 255, 0.3),
                 0 0 40px rgba(255, 51, 255, 0.2);
```

### Typography Colors
```css
/* Stark contrast for readability */
--foreground: 0 0% 100%;          /* Pure white - headings */
--foreground-muted: 0 0% 60%;     /* Grey-400 - secondary text */
--foreground-subtle: 0 0% 40%;    /* Grey-600 - tertiary */
```

### Surface & Border
```css
/* High transparency glass */
--card: 0 0% 100% / 0.03;         /* 3% white overlay */
--card-hover: 0 0% 100% / 0.06;   /* 6% on hover */
--border: 0 0% 100% / 0.10;       /* 10% white border */
--border-glow: 0 0% 100% / 0.20;  /* 20% for emphasis */
```

### Semantic Colors
```css
--success: 142 76% 45%;           /* Muted green */
--warning: 38 92% 50%;            /* Amber */
--destructive: 0 72% 51%;         /* Muted red */
```

---

## 🧩 Component Strategy

> **Priority 1: React Bits** (Visuals/Interaction)  
> **Priority 2: Shadcn/ui** (Forms/Structure)  
> **Do not reinvent wheels.**

### Shadcn/ui (The Structure)
**Purpose**: Clean, functional components with minimal styling

**Use Cases**:
- **Forms**: Input, Select, Checkbox - stark white borders on void
- **Dialogs**: Sheet, Modal - glass surfaces with spectral border glow
- **Navigation**: Tabs, Breadcrumb - simple with hover state transitions
- **Data**: Table, Badge - high contrast typography

**Styling Override**:
```tsx
// All Shadcn components use void + glass + spectral accents
className="bg-white/[0.03] border border-white/10 backdrop-blur-sm"
```

### React Bits (The Soul)
**Purpose**: Premium spectral effects and animations

**Key Components**:
| Component | Usage |
|-----------|-------|
| **Prism** | Hero sections - spectral light beam effects |
| **Border Beam** | Cards - animated spectral border glow |
| **Glass Surface** | Elevated containers with blur |
| **Fluid Glass** | Interactive glass with motion |
| **Chroma Grid** | Background patterns with spectral tint |

**Hero Implementation**:
```tsx
<Prism>
  <h1 className="text-white text-5xl font-semibold">
    A spectrum of colors that spark creativity
  </h1>
</Prism>
```

---

## 📝 Typography

### Font Stack
```css
font-family: 'Inter', 'Geist Sans', system-ui, sans-serif;
font-family-mono: 'Geist Mono', 'Fira Code', monospace;
```

### Hierarchy
| Level | Size | Weight | Color |
|-------|------|--------|-------|
| H1 | 3rem (48px) | 600 | Pure White |
| H2 | 2rem (32px) | 600 | Pure White |
| H3 | 1.5rem (24px) | 500 | Pure White |
| Body | 1rem (16px) | 400 | Grey-400 |
| Caption | 0.875rem (14px) | 400 | Grey-600 |

---

## ✨ Signature Effects

### Spectral Border Beam
```css
.spectral-border {
  position: relative;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.spectral-border::before {
  content: '';
  position: absolute;
  inset: -1px;
  background: var(--spectral-gradient);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 1px;
  border-radius: inherit;
  animation: spectral-rotate 4s linear infinite;
}
```

### Glass Surface
```css
.glass-surface {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
}
```

### Spectral Glow Text
```css
.spectral-text {
  background: var(--spectral-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(51, 255, 255, 0.4));
}
```

---

## 🎭 Design Principles

### 1. Void First
- Start with pure black (#030303)
- Add surfaces at 3-6% white opacity
- Light comes from spectral accents, not background

### 2. Spectral Restraint
- Use prismatic gradients sparingly - they are the focal point
- One spectral element per viewport section maximum
- Let the void breathe

### 3. Glass Layering
- Base layer: Void black
- Surface layer: 3% white glass
- Elevated layer: 6% white glass + blur
- Accent layer: Spectral border/glow

### 4. Typography Contrast
- Headings: Pure white (#ffffff)
- Body: Grey-400 for comfortable reading
- Never use grey text on grey backgrounds

---

## � Component Structure

```
components/
├── ui/              # Shadcn (void + glass styled)
│   ├── button.tsx   # Ghost/outline variants
│   ├── card.tsx     # Glass surface
│   └── input.tsx    # White border focus
├── creative/        # React Bits (spectral effects)
│   ├── prism-hero.tsx
│   ├── border-beam-card.tsx
│   ├── glass-surface.tsx
│   └── spectral-button.tsx
└── ecommerce/       # Business components
```

---

## ⚡ Animation Standards

### Spectral Animations
```css
@keyframes spectral-rotate {
  from { filter: hue-rotate(0deg); }
  to { filter: hue-rotate(360deg); }
}

@keyframes spectral-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
```

### Timing
- **Hover**: 200ms ease-out
- **Focus**: 150ms ease-in
- **Spectral rotation**: 4s linear infinite
- **Page transitions**: 300ms ease-in-out

---

## 🔧 Tailwind Integration

```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      void: '#030303',
      'void-elevated': '#0a0a0a',
      'void-surface': '#0f0f0f',
      spectral: {
        cyan: '#33ffff',
        magenta: '#ff33ff',
      }
    },
    backgroundImage: {
      'spectral-gradient': 'linear-gradient(90deg, #33ffff, #6666ff, #cc33ff, #ff33ff, #ffffff)',
    }
  }
}
```

---

## 🎨 Template Standards: Event Pages

### Base Component
All event pages must use the `EventPageTemplate` (or the standardized `LightRays` configuration).

### Visual Signature
The "Scoop AI" look is defined by:
- **Background**: `bg-black`
- **Effect**: `LightRays` (Cyan #00ffff, Speed 1.5, Spread 0.8)
- **Typography**: Centered, Bold Sans-serif Title, Monospace Meta-data.

### Constraint
Do not deviate from this visual structure for new event pages to ensure brand consistency.
