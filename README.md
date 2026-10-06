# Nick's Computer Services

Frontend website for Nick's Computer Services, a local computer repair and IT services business.

Built with React, TypeScript, Vite, and React Router.

## Requirements

- Node.js (LTS recommended)
- npm

## Setup

Clone the repository and install the dependencies:

```bash
git https://github.com/Ashintosh/nicks-computer-services-frontend.git
cd nicks-computer-services-frontend/
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL, usually `http://localhost:5173`.

## Production Build

Create a production build:

```bash
npm run build
```

The finished site will be generated in the `dist/` directory.

## Preview the Production Build

To test the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint with:

```bash
npm run lint
```

It is recommended to run the linter before committing changes.

## Deployment

Deploy the contents of the `dist/` directory to static web host after running:

```bash
npm run build
```

The site is a client-side React application, so the web server must be configured to serve `index.html` for application routes such as `/attributions`.
