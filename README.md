# Winter Festival Vendor Directory

A professional web application that transforms messy vendor data into a clean, interactive directory with real-time search and filtering capabilities.

## Overview

This project showcases data transformation and modern web development by converting unstructured vendor information into a machine-readable format and presenting it through an elegant, glassmorphic web interface.

## Features

- **Clean JSON Data Structure** - Machine-readable vendor information
- **Interactive Web Interface** - Real-time search and filtering
- **Professional Design** - Dark emerald theme with glassmorphic cards
- **Responsive Layout** - Works on desktop, tablet, and mobile devices
- **Font Awesome Icons** - Professional iconography throughout
- **Statistics Dashboard** - Quick overview of vendor metrics

## Files

- `dmitris-sanity-saver.json` - Structured vendor data in JSON format
- `winter-festival-vendors.html` - Interactive web interface
- `verify_json.py` - Python script to validate and display JSON data
- `server.js` - Node.js HTTP server for local hosting

## Quick Start

### View the Web Interface

Simply open `winter-festival-vendors.html` in any modern web browser.

### Run with Python Server

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/winter-festival-vendors.html`

### Run with Node.js Server

```bash
node server.js
```

Then visit `http://localhost:3000/`

### Verify JSON Data

```bash
python verify_json.py
```

## Technologies Used

- HTML5
- CSS3 (Glassmorphism, CSS Grid, Flexbox)
- Vanilla JavaScript
- Font Awesome Icons
- Inter Font Family
- Python (for JSON validation)
- Node.js (for HTTP server)

## Design Features

- Dark emerald green color scheme
- Glassmorphic card design with backdrop blur
- Teal accent colors on hover
- Smooth animations and transitions
- Professional typography
- Accessible interface

## Data Structure

The vendor data includes:
- Vendor name
- Location at the festival
- Cuisine type

All data is structured in JSON format for easy parsing and integration with other applications.

## Credits

Built by [Eri Perspective](https://eriperspective.com) | Powered by [Goose](https://github.com/block/goose)

## License

MIT License - Feel free to use and modify for your own projects.
