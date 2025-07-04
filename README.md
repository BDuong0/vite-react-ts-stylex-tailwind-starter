# Vite + React + TypeScript + StyleX + Tailwind Starter Project

![Vite NPM Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBDuong0%2Fvite-react-ts-stylex-tailwind-starter%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=%24%5B'devDependencies'%5D%5B'vite'%5D&logo=vite&logoColor=FFDD35&label=Vite&labelColor=4FBFFF)
![React NPM Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBDuong0%2Fvite-react-ts-stylex-tailwind-starter%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=%24.dependencies.react&logo=React&label=React&labelColor=black)
![Typescript NPM Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBDuong0%2Fvite-react-ts-stylex-tailwind-starter%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=%24%5B'devDependencies'%5D%5B'typescript'%5D&logo=typescript&logoColor=white&label=Typescript&labelColor=orange)
![StyleX NPM Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBDuong0%2Fvite-react-ts-stylex-tailwind-starter%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=%24%5B'dependencies'%5D%5B'%40stylexjs%2Fstylex'%5D&logo=facebook&label=StyleX&labelColor=darkslateblue)
![Tailwind NPM Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBDuong0%2Fvite-react-ts-stylex-tailwind-starter%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=%24%5B'dependencies'%5D%5B'tailwindcss'%5D&logo=tailwindcss&label=TailwindCSS&labelColor=2F4F4F)
![Cypress NPM Version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2FBDuong0%2Fvite-react-ts-stylex-tailwind-starter%2Frefs%2Fheads%2Fmain%2Fpackage.json&query=%24%5B'devDependencies'%5D%5B'cypress'%5D&logo=cypress&label=Cypress)

This template is a minimal setup for a Vite React project made via "npm create vite@latest" and choosing the react-typescript template. In addition to that, I installed and configured StyleX and Tailwind so they can be used with this Typescript React project. I've also added Cypress for both component testing and end-to-end testing.

I've removed all default HTML and CSS code that's generated by "npm create vite@latest" so you have a clean slate from which you can write your own HTML and CSS styles completely from scratch.

### Styles Built With

- [TailwindCSS](https://tailwindcss.com/) A utility-first CSS framework with lots of classes to style directly in your markup
- [StyleX](https://stylexjs.com/) The CSS-in-JS framework used by Facebook

### Other Plugins

- [Prettier](https://prettier.io/docs/) Code formatter needed for TailwindCSS's automatic CSS class sorting
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier#how-classes-are-sorted) A Prettier plugin for TailwindCSS that automatically sorts classes based on Tailwind's recommended class order.
- [Cypress](https://www.cypress.io/) A next generation front end testing tool built for the modern web.
- [axe-core](https://www.npmjs.com/package/axe-core) Accessibility engine for automated Web UI testing
- [cypress-axe](https://www.npmjs.com/package/cypress-axe) Test accessibility with axe-core in Cypress
- [cypress-real-events](https://www.npmjs.com/package/cypress-real-events) More reliable way to test native browser events in Cypress

### Shadcn/ui is also included

- [shadcn/ui](https://ui.shadcn.com/) A set of well-designed, accessible components and a code distribution platform
- Add components from shadcn/ui via:`npx shadcn@latest add [component]
`

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/BDuong0/vite-react-ts-stylex-tailwind-starter.git
   ```

   ```bash
   cd vite-react-ts-stylex-tailwind-starter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```
