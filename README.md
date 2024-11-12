# LazyStreams

Welcome to **lazy-streams**, an elegant and modular TypeScript library. Developed by [Monadica](http://monadica.com).

---

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **TypeScript**: Type-safe development with easy compilation to various JavaScript module formats.
- **ESM, CommonJS, UMD, and AMD Support**: Out-of-the-box multi-module format support for broad compatibility.
- **Testing with Jest**: Write robust unit tests with Jest.
- **Linting and Formatting**: Ensure code consistency with ESLint and Prettier.
- **Automatic Documentation**: Generate documentation from TSDoc comments with TypeDoc.
- **Automated Semantic Versioning**: Manage versioning with `standard-version` for seamless releases.

---

## Getting Started

To use this template for your next TypeScript npm package, follow these steps:

### 1. Clone the Repository

Clone this repository to your local machine and navigate to the project directory.

```bash
git clone https://github.com/monadicarts/lazy-streams.git
cd lazy-streams
```

2. Install Dependencies

Install the required dependencies using npm or yarn.

```bash
npm install
```

3. Start Coding

You’re now ready to start building your own TypeScript npm package!

Project Structure

```bash
lazy-streams/
├── CHANGELOG.md             # Automatically generated changelog for tracking version history and changes
├── LICENSE                  # License file, typically contains the MIT license or other open-source license terms
├── README.md                # Main documentation file for the project, with setup, usage instructions, and more

├── docs                     # Directory containing generated documentation files from TypeDoc
|   ├── assets               # Assets for the documentation, such as CSS, icons, and JavaScript files for styling and functionality
|   |   ├── highlight.css    # CSS file for syntax highlighting in code samples within the documentation
|   |   ├── icons.js         # JavaScript file for managing icons in the documentation
|   |   ├── icons.svg        # SVG file containing icon definitions
|   |   ├── main.js          # Main JavaScript file for documentation page interactivity
|   |   ├── navigation.js    # JavaScript file for handling navigation in the documentation
|   |   ├── search.js        # JavaScript file for implementing search functionality within the documentation
|   |   └── style.css        # General styling for the documentation pages
|   ├── classes              # Documentation pages for each class defined in the project
|   |   └── LazyStream.html  # HTML documentation page for the LazyStream class
|   ├── index.html           # Main entry point for the generated documentation
|   └── modules.html         # Documentation index for modules in the project

├── eslint.config.cjs        # ESLint configuration file in CommonJS format for linting the codebase
├── jest.config.cjs          # Jest configuration file in CommonJS format for setting up the testing environment
├── package-lock.json        # Automatically generated lock file for managing exact dependency versions
├── package.json             # Main package configuration file with metadata, dependencies, and scripts
├── rollup.config.js         # Rollup configuration file for bundling the project into different module formats

├── src                      # Directory containing the source code and tests
|   ├── LazyStream.ts        # Main implementation file for the LazyStream class
|   ├── __tests__            # Directory for unit tests
|   |   └── LazyStream.spec.ts # Unit test file for the LazyStream class
|   └── index.ts             # Entry point of the module, exports main classes and functions

├── tsconfig.json            # TypeScript configuration file with compiler options
└── typedoc.json             # TypeDoc configuration file for generating documentation based on TSDoc comments
```

Usage

After setting up the template and customizing it for your project, you can start adding your TypeScript code in the src/ directory.

Export your public API in src/index.ts, and this will serve as the entry point for your npm package. Here’s an example of a basic function and class you can add:

```typescript
// src/index.ts
export const greet = (name: string): string => `Hello, ${name}!`;

export class Greeter {
  constructor(public greeting: string) {}
  greet(name: string): string {
    return `${this.greeting}, ${name}!`;
  }
}
```

Compile and publish your package when ready, following the Scripts section below.

Scripts

A set of npm scripts are preconfigured to streamline development and publishing:
• npm run build: Compiles TypeScript to JavaScript in multiple module formats (ESM, CommonJS, UMD, AMD).
• npm test: Runs Jest tests.
• npm run lint: Checks code for linting errors using ESLint.
• npm run format: Formats code with Prettier.
• npm run docs: Generates documentation with TypeDoc.
• npm run release: Bumps version and updates changelog based on commit messages using standard-version.
• npm publish: Publishes the package to npm (run after npm run release).

Configuration

This template includes configuration files for various tools, such as:
• TypeScript (tsconfig.json): Configures compiler options and output.
• ESLint (.eslintrc.js): Configures linting rules for code consistency.
• Prettier (.prettierrc): Configures formatting rules for consistent style.
• Jest (jest.config.js): Configures Jest for unit testing.
• TypeDoc (typedoc.json): Configures TypeDoc for documentation generation.

Contributing

We welcome contributions! To contribute: 1. Fork the repository and create a new branch (git checkout -b feature/YourFeature). 2. Make your changes and commit them (git commit -m "Add feature"). 3. Push to the branch (git push origin feature/YourFeature). 4. Open a Pull Request.

If you have any questions or suggestions, please reach out to us at monadicarts@gmail.com.

License

This project is licensed under the MIT License.

Developed and maintained by Monadica.

Thank you for using `template-ts-npm`! We hope this template helps you create amazing TypeScript npm packages with ease.

Contact

    •	GitHub: https://github.com/monadicarts
    •	Website: monadica.com
    •	Email: monadicarts@gmail.com

Happy Coding! 🚀
