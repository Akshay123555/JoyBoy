# SummerPlay React

This is a React conversion of the SummerPlay static HTML website.

## Requirements

- Node.js (v14 or newer)
- npm (v6 or newer)

## Installation

1. Install Node.js and npm from [https://nodejs.org/](https://nodejs.org/)

2. Navigate to the project directory and install dependencies:

```bash
cd summerplay-react
npm install
```

## Running the Application

To start the development server:

```bash
npm start
```

The application will be available at [http://localhost:8080](http://localhost:8080)

## Build for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `build` folder and can be served using any static file server.

## Project Structure

- `public/`: Static assets and HTML template
- `src/`: Source code
  - `components/`: React components for each page
  - `styles.css`: Main stylesheet
  - `App.js`: Main application component with routing
  - `index.js`: Application entry point

## Features

- React-based single-page application
- React Router for navigation
- Responsive design
- Interactive forms
- Component-based architecture 