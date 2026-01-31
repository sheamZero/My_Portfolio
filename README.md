# Personal Portfolio Website

This repository contains a static personal portfolio website built with HTML, CSS, and JavaScript. It showcases projects, skills, education, and contact information.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [About Me](#about-me)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Accessibility](#accessibility)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

A small, easy-to-edit portfolio intended to demonstrate front-end skills and host project pages. The site is static and requires no build step — just a browser to view the pages locally.

## Features

- Clean, responsive layout using CSS
- Navigation bar with mobile toggle
- Project pages under `projectDetails/`
- Reusable sections: About, Projects, Skills, Contact
- Lightweight JavaScript for interactivity (files in `scripts/`)

## About Me

Short, friendly introduction: a front-end developer focused on accessible, responsive, and performance-minded websites. Comfortable turning designs into maintainable code and continually learning modern front-end practices.

## Getting Started

To view the site locally:

```powershell
# From the repository folder, open the HTML in your default browser (Windows):
start index.html
```

To edit content:

- Update HTML files in the project root or `projectDetails/`.
- Change styling in `styles/` and `projectDetails/projectsDetails.css`.
- Modify interactive behavior in `scripts/`.

## Customization

- Edit the `About` text in `info.txt` or directly in the relevant HTML section.
- Replace images in `assests/` and update the `src` attributes in HTML.
- Tweak colors, fonts, and spacing in `styles/style.css` or the specific CSS files.
- To change the navbar behavior, update `scripts/navbar.js` and `styles/navbar.css`.

## Accessibility

The site aims for basic accessibility: semantic HTML, keyboard-navigable links, and visible focus styles. When editing the navbar or interactive components, ensure:

- Toggle buttons use `aria-expanded` and `aria-controls`.
- Navigation uses `role="navigation"` and meaningful `aria-label` values.
- Focusable elements remain focusable when visible.

## Testing

- Test in multiple browsers (Chrome, Edge, Firefox) and mobile emulation.
- Use keyboard navigation (Tab/Shift+Tab) to ensure all controls are reachable.

## Contributing

Contributions are welcome. For small fixes, open a pull request. For larger changes, open an issue first to discuss scope.

## License

Add a `LICENSE` file if you want to publish this repository under a specific license (e.g., MIT).

## Contact

Prefer email: yourname@example.com. Add links to GitHub and LinkedIn in the site header or footer for public contact.

---

If you want, I can also:

- generate an `info.html` using the content in `info.txt`;
- implement the mobile menu behavior in `scripts/navbar.js`;
- add a small deploy instruction for GitHub Pages.
