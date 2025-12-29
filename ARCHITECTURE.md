# BETA Master Architecture Document  
**Platform**: `betaucb.org`  
**Mission**: Connect Web3, AI, and Blockchain talents via a high-end digital platform.

---

## 1. ⚙️ System Architecture Overview

### 🧠 Application Flow
- **Frontend**: Built with `Next.js 15` (App Router) in **strict TypeScript mode**, using **Tailwind CSS** + **Shadcn/ui** for UI consistency, and **React Bits** for hero animations.
- **Backend**: Powered by **Supabase** (PostgreSQL, Auth, Realtime).
- **ORM**: Prisma handles typed access to Supabase’s Postgres database.

### 🔌 Embeds Strategy
- **Twitter/X**: Use official `<blockquote class="twitter-tweet">` embed script.
- **YouTube**: Use `<iframe>` with the **YouTube Iframe API** to preserve view count fidelity.
- **BETA Heat**: Custom internal tracking—when a user views or interacts with an embed, we increment a `BetaInteraction` entry for internal analytics without tampering with third-party metrics.

---

## 2. 🧩 Database Schema (Prisma)

```ts
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("SUPABASE_DB_URL")
}

model User {
  id             String   @id @default(uuid())
  email          String   @unique
  name           String?
  linkedinUrl    String?
  xHandle        String?
  githubUrl      String?
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  projects       Project[]
  interests      InvestmentInterest[]
  interactions   BetaInteraction[]
}

model Project {
  id          String   @id @default(uuid())
  title       String
  description String
  embedUrl    String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  user        User     @relation(fields: [userId], references: [id])
  userId      String

  interactions BetaInteraction[]
}

model Event {
  id          String   @id @default(uuid())
  title       String
  description String
  location    String?
  startTime   DateTime
  endTime     DateTime
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

model InvestmentInterest {
  id          String   @id @default(uuid())
  user        User     @relation(fields: [userId], references: [id])
  userId      String
  project     Project? @relation(fields: [projectId], references: [id])
  projectId   String?

  message     String?
  createdAt   DateTime @default(now())
  walletAddr  String?  // nullable for now
  futureToken String?  // reserved for token/contract ID
}

model BetaInteraction {
  id          String   @id @default(uuid())
  user        User?    @relation(fields: [userId], references: [id])
  userId      String?
  project     Project? @relation(fields: [projectId], references: [id])
  projectId   String?

  type        InteractionType
  createdAt   DateTime @default(now())
}

// --- Payment & Products System (Added by Architect) ---

model Product {
  id          String   @id @default(uuid())
  name        String
  description String?
  price       Int      // Stored in cents (e.g., 1000 = $10.00)
  currency    String   @default("usd")
  isActive    Boolean  @default(true)
  type        ProductType @default(SERVICE) // COURSE, SERVICE, FILE
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  orders      Order[]
}

model Order {
  id          String   @id @default(uuid())
  user        User     @relation(fields: [userId], references: [id])
  userId      String
  product     Product  @relation(fields: [productId], references: [id])
  productId   String
  
  status      OrderStatus @default(PENDING)
  totalAmount Int      // Amount paid in cents
  stripePaymentId String? // Transaction ID from Stripe
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}

enum ProductType {
  COURSE
  SERVICE
  DIGITAL_DOWNLOAD
}

enum OrderStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

enum InteractionType {
  VIEW
  CLICK
  LIKE
}

### 🧭 Future Modules Reserved in Directory Tree

To support future monetization strategies (e.g. paid hackathon entries, premium courses), the following directories are already reserved:

- `app/cart/`: A shopping cart view combining soft commitments and paid products.
- `app/checkout/`: Stripe Checkout redirection logic.
- `app/admin/products/`: Admin dashboard for product management.

These modules are not active in the Phase 1 MVP but are scaffolded for Phase 2+ scalability.


/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│
│   ├── project/
│   │   ├── [id]/page.tsx
│   │   └── new/page.tsx
│
│   ├── event/
│   │   └── [id]/page.tsx
│
│   ├── products/
│   │   ├── page.tsx
│   │   └── [id]/page.tsx
│
│   ├── orders/
│   │   └── page.tsx
│
│   ├── cart/                            # 🆕 Cart module (soft commitment + product checkout)
│   │   └── page.tsx
│
│   ├── checkout/                        # 🆕 Stripe session redirect
│   │   └── page.tsx
│
│   ├── admin/                           # 🆕 Admin dashboard
│   │   └── products/
│   │       ├── page.tsx
│   │       └── new/page.tsx
│
│   └── api/
│       ├── heat/route.ts
│       ├── interest/route.ts
│       ├── products/route.ts
│       ├── orders/create/route.ts
│       ├── stripe/webhook/route.ts
│       └── cart/route.ts
│
├── components/
│   ├── ui/
│   ├── creative/
│   └── ecommerce/
│       ├── ProductCard.tsx
│       ├── ProductDetail.tsx
│       ├── OrderSummary.tsx
│       ├── CheckoutButton.tsx
│       ├── PaymentStatus.tsx
│       └── CartDrawer.tsx
│
├── lib/
│   ├── supabase.ts
│   ├── prisma.ts
│   └── stripe.ts
│
├── types/
│   └── index.ts
├── prisma/
│   └── schema.prisma
├── .cursorrules
├── tailwind.config.ts
├── tsconfig.json
└── pnpm-lock.yaml
