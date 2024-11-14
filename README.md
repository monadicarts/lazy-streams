# LazyStreams

Welcome to **@monadica/lazy-streams**, an elegant and modular TypeScript library. Developed by [Monadica](http://monadica.com).

---

## Table of Contents

- [LazyStreams](#lazystreams)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Installation](#installation)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Usage](#usage)
  - [Scripts](#scripts)
  - [Configuration](#configuration)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

---

## Features

- **TypeScript**: Type-safe development with easy compilation to various JavaScript module formats.
- **ESM, CommonJS, UMD, and AMD Support**: Out-of-the-box multi-module format support for broad compatibility.
- **Testing with Jest**: Write robust unit tests with Jest.
- **Linting and Formatting**: Ensure code consistency with ESLint and Prettier.
- **Automatic Documentation**: Generate documentation from TSDoc comments with TypeDoc.
- **Automated Semantic Versioning**: Manage versioning with `standard-version` for seamless releases.

---

## Installation

To install the latest version of `@monadica/lazy-streams` from npm, use the following command:

```bash
npm install @monadica/lazy-streams
```

## Getting Started

To use or modify this library, follow these steps:

1. Clone the Repository

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

## Project Structure

```
lazy-streams/
├── CHANGELOG.md              # Automatically generated changelog for tracking
|                             #   version history and changes
├── LICENSE                   # License file, typically contains the MIT
|                             #   license or other open-source license terms
├── README.md                 # Main documentation file for the project, with
|                             #   setup, usage instructions, and more
├── docs                      # Directory containing generated documentation
|                             #   files from TypeDoc
|   ├── assets                # Assets for the documentation, such as CSS,
|   |                         #   icons, and JavaScript files for styling and
|   |                         #   functionality
|   |   ├── highlight.css     # CSS file for syntax highlighting in code
|   |   |                     #   samples within the documentation
|   |   ├── icons.js          # JavaScript file for managing icons in the
|   |   |                     #   documentation
|   |   ├── icons.svg         # SVG file containing icon definitions
|   |   ├── main.js           # Main JavaScript file for documentation page
|   |   |                     #   interactivity
|   |   ├── navigation.js     # JavaScript file for handling navigation in the
|   |   |                     #   documentation
|   |   ├── search.js         # JavaScript file for implementing search
|   |   |                     #   functionality within the documentation
|   |   └── style.css         # General styling for the documentation pages
|   ├── classes               # Documentation pages for each class defined in
|   |   |                     #   the project
|   |   └── LazyStream.html   # HTML documentation page for the LazyStream
|   |                         #   class
|   ├── index.html            # Main entry point for the generated
|   |                         #   documentation
|   └── modules.html          # Documentation index for modules in the project
├── eslint.config.cjs         # ESLint configuration file in CommonJS format
|                             #   for linting the codebase
├── jest.config.cjs           # Jest configuration file in CommonJS format for
|                             #   setting up the testing environment
├── package-lock.json         # Automatically generated lock file for managing
|                             #   exact dependency versions
├── package.json              # Main package configuration file with metadata,
|                             #   dependencies, and scripts
├── rollup.config.js          # Rollup configuration file for bundling the
|                             #   project into different module formats
├── src                       # Directory containing the source code and tests
|   ├── LazyStream.ts         # Main implementation file for the LazyStream
|   |                         #   class
|   ├── __tests__             # Directory for unit tests
|   |   └── LazyStream.spec.ts# Unit test file for the LazyStream class
|   └── index.ts              # Entry point of the module, exports main classes
|                             #   and functions
├── tsconfig.json             # TypeScript configuration file with compiler
|                             #   options
└── typedoc.json              # TypeDoc configuration file for generating
                              #   documentation based on TSDoc comments
```

## Usage

Here’s a short example of how to use the `@monadica/lazy-streams` library to create a lazy stream, apply transformations, and retrieve results:

```typescript
import { LazyStream } from "@monadica/lazy-streams";

// Create a lazy stream from an array
const stream = LazyStream.from([1, 2, 3, 4, 5]);

// Apply transformations: multiply each element by 2 and filter even results
const transformedStream = stream.map((x) => x * 2).filter((x) => x % 2 === 0);

// Take the first 3 elements of the transformed stream and convert to array
const result = transformedStream.take(3).toArray();

console.log(result); // Output: [2, 4, 6]
```

This example demonstrates:

- Creating a lazy stream from an array
- Using map to transform values
- Using filter to filter out certain values
- Using take to limit the results
- Converting the final stream to an array using toArray

## Scripts

A set of npm scripts are preconfigured to streamline development and publishing:

- `npm run build`: Compiles TypeScript to JavaScript in multiple module formats (ESM, CommonJS, UMD, AMD).
- `npm test`: Runs Jest tests.
- `npm run lint`: Checks code for linting errors using ESLint.
- `npm run format`: Formats code with Prettier.
- `npm run docs`: Generates documentation with TypeDoc.
- `npm run release`: Bumps version and updates changelog based on commit messages using standard-version.
- `npm publish`: Publishes the package to npm (run after npm run release).

## Configuration

This template includes configuration files for various tools, such as:

- TypeScript (`tsconfig.json`): Configures compiler options and output.
- ESLint (`eslint.config.cjs`): Configures linting rules for code consistency.
- Prettier (`.prettierrc`): Configures formatting rules for consistent style.
- Jest (`jest.config.cjs`): Configures Jest for unit testing.
- TypeDoc (`typedoc.json`): Configures TypeDoc for documentation generation.

## Contributing

We welcome contributions! To contribute:

1. Fork the repository and create a new branch (`git checkout -b feature/YourFeature`).
2. Make your changes and commit them (`git commit -m "Add feature"`).
3. Push to the branch (`git push origin feature/YourFeature`).
4. Open a Pull Request.

If you have any questions or suggestions, please reach out to us at monadicarts@gmail.com.

## License

This project is licensed under the MIT License.

Developed and maintained by Monadica.

Thank you for using `@monadica/lazy-streams`!

## Contact

- GitHub: [github.com/monadicarts](https://github.com/monadicarts)
- Website: [monadica.com](https://monadica.com)
- Email: [monadicarts@gmail.com](mailto://monadicarts@gmail.com)

Happy Coding! 🚀
