# JuanS3 - Personal Portfolio

This repository contains the source code for my personal portfolio website, accessible at [juans3.github.io](https://juans3.github.io).

This portfolio is a single-page application built to showcase my skills, experience, and projects in a clean, minimalist, and responsive design.

This project was originally based on the [AstroZen](https://github.com/immois/astro-zen) template.

## ✨ Features

- Minimalist, clean, and simple design
- Mobile-first responsive layout
- SEO-friendly and accessible
- Built with modern technologies like Astro and TailwindCSS

## 🛠️ Built With

- [Astro](https://astro.build/) - The web framework for building fast, content-driven websites.
- [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher recommended)
- [pnpm](https://pnpm.io/installation)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/JuanS3/JuanS3.github.io.git
   ```
2. Navigate to the project directory:
   ```sh
   cd JuanS3.github.io
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```

### Development

To start the local development server, run the following command. This will open a live-reloading server, typically at `http://localhost:4321`.

```sh
pnpm dev
```

### Build

To build the project for production, run:

```sh
pnpm build
```

This will create a `dist/` directory with the optimized, static assets for your site.

To preview the production build locally, run:

```sh
pnpm preview
```

## CI/CD

This project uses GitHub Actions for CI/CD. The workflow is defined in `.github/workflows/deploy.yml`. On every push to the `main` branch, the following steps are executed:

1.  The code is checked out.
2.  Node.js and pnpm are set up.
3.  Dependencies are installed.
4.  The project is built.
5.  The `dist` folder is deployed to the `gh-pages` branch, which is then served by GitHub Pages.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

AstroZen is a minimalist, accessible and responsive portfolio template for your personal portfolio website. It is built with Astro and TailwindCSS.

![zen-og](https://github.com/user-attachments/assets/7a72aaae-6652-4cd0-becc-8e6a3c224993)

## 🔥 Features

- [x] Minimalist design. clean and simple
- [x] Mobile-first responsive layout
- [x] SEO-friendly and accessible
- [x] Easy to customize with a single configuration file

## ✅ Lighthouse Score

![performance](https://github.com/user-attachments/assets/4f95e2ca-03f9-4996-9e34-dcd179194c58)

## 🚀 Getting Started

Clone this repository to your local machine using Git.

```scheme
git clone https://github.com/immois/astro-zen.git
cd astro-zen
```

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm install` | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |
