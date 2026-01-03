# GCA Construction Ltd Website

A modern, high-performance corporate website for **GCA Construction Limited**, specializing in plumbing, pipefitting, and welding services. Built with the latest web technologies to ensure a premium user experience.

![GCA Construction](public/about-graphic.png)

## 🏗️ Project Overview

This website serves as the digital storefront for GCA Construction, showcasing their expertise in industrial and residential infrastructure. It features a dynamic, responsive design with smooth animations and interactive elements.

### Key Features

*   **⚡ Modern Tech Stack**: Built with [Next.js 15](https://nextjs.org/) and [React](https://react.dev/).
*   **🎨 Styling**: Styled with [Tailwind CSS](https://tailwindcss.com/) for a bespoke, responsive design.
*   **✨ Animations**: Powered by [Framer Motion](https://www.framer.com/motion/) for silky smooth transitions.
*   **🧩 UI Components**: Utilizes [Aceternity UI](https://ui.aceternity.com/) for premium components like:
    *   **Images Slider**: Immersive hero section with autoplaying construction imagery.
    *   **Infinite Marquee**: Smooth scrolling ribbon for brand messaging.
    *   **Infinite Moving Cards**: Interactive testimonials section.
    *   **Layout Grid**: Stylized gallery for featured projects.
    *   **Floating Navbar**: Smart navigation that appears when needed.
*   **📱 Fully Responsive**: Optimized for all devices, from mobile phones to large desktop screens.

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher recommended)
*   npm (or yarn/pnpm/bun)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/gca-construction-web.git
    cd gca-construction-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Open the application:**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
gca-construction-web/
├── app/                  # Next.js App Router directory
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout definition
│   └── page.tsx          # Homepage component (Main landing page)
├── components/           # Reusable React components
│   ├── footer.tsx        # Website footer
│   └── ui/               # UI components (mostly Aceternity/Custom)
│       ├── floating-navbar.tsx
│       ├── hero-highlight.tsx
│       ├── images-slider.tsx
│       ├── infinite-marquee.tsx
│       ├── infinite-moving-cards.tsx
│       └── layout-grid.tsx
├── public/               # Static assets (images, icons)
├── lib/                  # Utility functions (cn class merger)
└── tailwind.config.ts    # Tailwind CSS configuration
```

## 🛠️ Customization

*   **Content**: Edit `app/page.tsx` to update text, services, and testimonials.
*   **Styling**: Modify `app/globals.css` or `tailwind.config.ts` to change the color scheme or global theme.
*   **Images**: Replace placeholder images in `public/` or update URL references in `page.tsx`.

## 📄 License

This project is proprietary to GCA Construction Ltd. All rights reserved.
