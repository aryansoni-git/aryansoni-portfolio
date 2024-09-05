# Aryan Soni Portfolio - Professional Frontend & UI/UX Developer

Welcome to the **Aryan Soni Portfolio** website, designed to highlight the skills, projects, and professional background of Aryan Soni. This portfolio is crafted using **Next.js 14** and **Tailwind CSS** to provide a modern, responsive, and interactive experience. It's aimed at potential employers, clients, and collaborators who want to explore Aryan's work and expertise in frontend development and UI/UX design.

## Live Demo

![Live Demo](/public/projects/aryansoni.png)

## Table of Contents
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation Guide](#installation-guide)
- [Usage Instructions](#usage-instructions)
- [Project Structure](#project-structure)
- [Custom Hooks](#custom-hooks)
- [Contact Information](#contact-information)
- [License Information](#license-information)


## Key Features
- **Responsive Design**: Optimized for a seamless experience across all devices using **Tailwind CSS**.
- **Dynamic Content**: Engaging animations and interactive elements, including animated titles and project showcases.
- **Smooth Navigation**: User-friendly scroll-based section tracking and dynamic URL updates without page reloads.
- **Interactive Elements**: Visually appealing skill carousel powered by **Swiper.js** and reusable button components.
- **Optimized Images**: Fast-loading images using **Next/Image**.
- **Contact Section**: Includes social media links, a contact form, and a personalized avatar for easy communication.

## Technologies Used
- **Frontend Framework**: Next.js 14, React
- **Styling Framework**: Tailwind CSS
- **Carousel Library**: Swiper.js
- **Image Optimization**: Next/Image
- **Custom Hooks**: `useScreenSize` for responsive design

## Installation Guide

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Clone the Repository
```bash
git clone https://github.com/your-username/aryan-soni-portfolio.git
cd aryan-soni-portfolio
```

### Install Dependencies
Using npm:
```bash
npm install
```

Using yarn:
```bash
yarn install
```

## Usage Instructions

### Development Mode
To run the development server locally:
```bash
npm run dev
# or
yarn dev
```
Navigate to `http://localhost:3000` to view the website in your browser.

### Production Build
To build the project for production:
```bash
npm run build
# or
yarn build
```

Start the production server:
```bash
npm start
# or
yarn start
```

### Deployment
Deploy the portfolio on platforms like Vercel, Netlify, or any Node.js-compatible server. Refer to the respective deployment guides for detailed instructions.

## Project Structure

```
ARYANSONI-PORTFOLIO/
├── .next                 # Next.js build output
├── node_modules          # Project dependencies
├── public/               # Public assets
│   ├── images            # Image assets
│   ├── icons             # Icon assets
│   └── pdf               # Resume or other documents
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.js     # Main layout component
│   │   ├── page.js       # Homepage content
│   │   └── components/   # Reusable React components
│   │       ├── AboutSection.jsx
│   │       ├── Button.jsx
│   │       ├── Footer.jsx
│   │       ├── Header.jsx
│   │       ├── Navigation.jsx
│   │       ├── ProjectSection.jsx
│   │       ├── SocialLinks.jsx
│   │       ├── TorchEffect.jsx
│   │       └── useScreenSize.jsx  # Custom hook for responsive design
│   └── data/
│       ├── data.json      # JSON file for dynamic content
│       └── LoadData.jsx   # Utility for fetching and loading data
├── .eslintrc.json        # ESLint configuration
├── .gitignore             # Git ignore file
├── jsconfig.json          # JavaScript configuration
└── next.config.mjs        # Next.js configuration
```

## Custom Hooks

### `useScreenSize`

The `useScreenSize` hook helps manage responsive design by determining if the screen width is below a specified threshold. It returns a boolean indicating whether the screen width is less than the given value, facilitating dynamic component rendering.

```javascript
'use client';

import { useEffect, useState } from "react";

export default function useScreenSize(isWidth) {
    const [isScreenSize, setIsScreenSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsScreenSize(window.innerWidth < isWidth);
        };

        handleResize(); // Set initial state
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [isWidth]);

    return isScreenSize;
}
```

## Contact Information

If you have any questions or suggestions regarding this project, feel free to contact me:

| Platform | Link |
| --- | --- |
| Email | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg" width="50" height="50">](mailto:aryansoni.work@gmail.com) |
| GitHub | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" width="50" height="50">](https://github.com/aryansoni-git) |
| LinkedIn | [<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" width="50" height="50">](https://www.linkedin.com/in/aryansoni-work) |
| Instagram | [aryansoni.ig](https://www.instagram.com/nocs_developer/) |

## License Information

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for more details.
