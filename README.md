# FretboardTrainer

A Progressive Web App (PWA) for learning guitar fretboard notes interactively.

## Features

- 📱 Works offline
- 🚀 Fast and responsive
- 💾 Installable on mobile devices
- 🎸 Interactive guitar fretboard learning

## Directory Structure

```
FretboardTrainer/
├── public/              # Static assets and entry point
│   ├── index.html       # Main HTML file
│   ├── manifest.json    # PWA manifest
│   ├── sw.js            # Service Worker
│   ├── favicon.ico      # Favicon
│   ├── icons/           # App icons (various sizes)
│   ├── js/              # Public JavaScript
│   │   ├── app.js
│   │   └── service-worker-register.js
│   └── styles/          # Public stylesheets
│       └── main.css
├── src/                 # Source code
│   ├── index.js         # Application entry point
│   ├── components/      # React/Vue components
│   ├── utils/           # Utility functions
│   ├── styles/          # Source stylesheets
│   └── assets/          # Images, fonts, etc.
│       ├── images/
│       └── fonts/
├── dist/                # Built files (generated)
├── package.json         # Project dependencies
├── webpack.config.js    # Webpack configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

### Build

```bash
npm run build
```

### Testing

```bash
npm test
```

## PWA Configuration

This project includes:
- **manifest.json**: Defines app metadata and icons
- **Service Worker**: Enables offline functionality
- **Icons**: Multiple sizes for different devices

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Partial support (iOS limitations)

## License

MIT