# Personal Portfolio

A modern, dark-themed developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack
- React 18 + Vite
- Tailwind CSS
- Framer Motion (animations)
- React Icons + Lucide React (icons)

## 1. Install dependencies
```
npm install
```

## 2. Run locally
```
npm run dev
```
Open the printed local URL (usually http://localhost:5173).

## 3. Personalize your content
Everything you need to edit lives in **one file**:
```
src/data/portfolioData.js
```
Update your name, role, tagline, education, skills, projects, experience, certifications,
GitHub/LinkedIn links, and email here. The whole site updates automatically.

### Add your photo
Place your photo in `public/` (e.g. `public/profile.jpg`) and set:
```js
avatarImage: '/profile.jpg'
```
in `portfolioData.js`. Until then, a gradient initials avatar is shown.

### Add your resume
Place your resume PDF in `public/resume.pdf` (or update `resumeUrl` in `portfolioData.js`).



## 5. Build for production
```
npm run build
```
Output goes to the `dist/` folder.

## 6. Deploy
- **GitHub Pages**: use the `gh-pages` package, or push `dist/` to a `gh-pages` branch
- **Vercel / Netlify**: import the repo, build command `npm run build`, output directory `dist`

## Project structure
```
src/
  components/   Navbar, Loader, ScrollProgressBar, BackToTop, Reveal
  sections/     Home, About, Education, Skills, Projects, Experience, Certifications, Contact, Footer
  data/         portfolioData.js — all editable content lives here
  App.jsx       Assembles all sections
  index.css     Tailwind layers + reusable utility classes (glass-card, btn-primary, etc.)
```
