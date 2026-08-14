# 🛋️ Gaddi & Co. — Bespoke Custom Sofas, Sofa-Cum-Beds & Comfort Furniture

A premium, modern web application built for **Gaddi & Co.**, showcasing handcrafted custom sofas, space-saving sofa-cum-beds, ergonomic cushions, and custom furniture design services. Built with high-performance technologies, elegant typography, smooth micro-interactions, and a custom furniture configurator.

---

## ✨ Features

- 🎨 **Interactive Furniture Configurator (`/customize`)**
  - Select sofa layout types (L-Shape, 3-Seater, Sectional, Recliner, Sofa-Cum-Bed).
  - Customize dimensions, seat depth, and backrest height.
  - Choose cushion firmness (Plush Down-Feather, High-Resilience Foam, Hybrid Memory Foam).
  - Select from premium upholstery fabrics (Velvet, Linen, Performance Fabrics, Genuine Leather, Bouclé).
  - Select leg finishes (Teak, Walnut, Brushed Brass, Matte Black).
  - Live quote calculator and instant WhatsApp order request generator.

- 🛋️ **Dedicated Sofa-Cum-Bed Section (`/sofa-cum-beds`)**
  - Space-saving dual-purpose furniture designs.
  - Highlights robust metal & teak conversion mechanisms, stain-resistant fabrics, and multi-functional storage options.

- 🪡 **Cushions & Comfort Accessories (`/cushions-comfort`)**
  - Ergonomic bolster pillows, down-feather throw cushions, and soft floor poufs.

- 🖼️ **Interactive Product Gallery & Lightbox (`/gallery`, `/sofas`)**
  - Multi-category filtering (Living Room, Minimalist, Luxury, Space Savers).
  - Fullscreen Lightbox modal preview for high-resolution upholstery details.

- 📲 **Instant WhatsApp Integration**
  - One-click direct inquiry on WhatsApp with pre-filled product customization details.

- 📱 **Responsive & Modern UI/UX**
  - Crafted with smooth animations using Framer Motion.
  - Glassmorphic single-line navigation header with active tab indicators.
  - Custom warm luxury color palette (Terracotta, Sand, Cream, Rich Teak Brown).

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript 6](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion 13](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)

---

## 📁 Project Directory Structure

```text
Anj/
├── public/                 # Static public assets & icons
├── src/
│   ├── assets/             # Brand logos, hero images, and graphics
│   ├── components/         # Reusable UI components & section layouts
│   │   ├── furniture/      # Product cards, sofa grids, filters, gallery & lightbox
│   │   ├── layout/         # Glassmorphism Navbar, Footer, PageHeader
│   │   ├── sections/       # Hero, Featured Sofas, Sofa-Cum-Bed feature, Trust strip, FAQs, Reviews
│   │   └── ui/             # Reusable Buttons, Modals, Badges, Logo
│   ├── data/               # Product catalog, fabric data, cushions & reviews dataset
│   ├── hooks/              # Custom React hooks (useScrollPosition, useMediaQuery)
│   ├── lib/                # Utility helper functions (whatsapp link generator, classnames)
│   ├── pages/              # App pages (Home, Sofas, SofaCumBeds, CushionsComfort, Customize, About, Contact, Gallery, SofaDetails, NotFound)
│   ├── App.tsx             # Main routing & application layout wrapper
│   ├── index.css           # Global Tailwind CSS styles & typography rules
│   └── main.tsx            # Application entry point
├── package.json            # Dependencies and npm scripts
├── tailwind.config.js      # Custom theme colors, fonts & animations
├── vite.config.ts          # Vite build configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** (v18.0.0 or higher) installed on your machine.

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mukeshahirwar9644/Anj.git
   cd Anj
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for Production**
   ```bash
   npm run build
   ```

5. **Preview Production Build Locally**
   ```bash
   npm run preview
   ```

---

## 🌐 Deploying to Render (Static Site)

To host this project on **Render.com**:

1. Log in to [Render Dashboard](https://dashboard.render.com/) and click **New +** -> **Static Site**.
2. Connect your GitHub repository (`mukeshahirwar9644/Anj`).
3. Fill in the deployment details:

| Setting | Value |
| :--- | :--- |
| **Name** | `gaddi-and-co` |
| **Branch** | `main` |
| **Root Directory** | *(Leave empty)* |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

4. **Single-Page Application (SPA) Routing Rule**:
   After creating the site, navigate to **Redirects/Rewrites** tab in Render and add:
   - **Source**: `/*`
   - **Action**: `Rewrite`
   - **Destination**: `/index.html`

---

## 📄 License

This project is created for **Gaddi & Co.** — All rights reserved.
