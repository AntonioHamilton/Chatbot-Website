# Blog Pessoal

This is a personal blog and portfolio website built with Next.js, TypeScript, and SCSS. It showcases my projects, shares my thoughts through blog posts, and provides information about me.

## ✨ Features

- **Portfolio Section:** Displays a list of projects with descriptions and images.
- **Blog Section:** A space for writing and publishing blog posts.
- **About Me Page:** Introduces myself, my skills, and my experiences.
- **Internationalization:** Supports both English and Portuguese languages.
- **Responsive Design:** Adapts to different screen sizes for a seamless experience on desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [SCSS Modules](https://sass-lang.com/)
- **Testing:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Linting:** [ESLint](https://eslint.org/)
- **Formatting:** [Prettier](https://prettier.io/)

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/your_username/your_repository.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Running the Application

To run the application in a development environment, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Other Scripts

- **Build:** `npm run build` - Builds the application for production.
- **Start:** `npm run start` - Starts a production server.
- **Lint:** `npm run lint` - Lints the codebase and fixes issues.
- **Test:** `npm run test` - Runs the test suite.

## 📂 Project Structure

```
.
├── .husky/           # Husky pre-commit hooks
├── public/           # Public assets (images, icons, etc.)
├── src/
│   ├── components/   # Reusable React components
│   ├── contexts/     # React contexts for state management
│   ├── hooks/        # Custom React hooks
│   ├── pages/        # Next.js pages and API routes
│   ├── services/     # API service layer
│   ├── styles/       # Global styles and variables
│   ├── Translations/ # Internationalization files
│   ├── types/        # TypeScript type definitions
│   └── utils/        # Utility functions
├── .eslintrc.json    # ESLint configuration
├── jest.config.js    # Jest configuration
├── next.config.js    # Next.js configuration
├── package.json      # Project dependencies and scripts
└── tsconfig.json     # TypeScript configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
