"""
# Resume Website

This is a simple React + Vite project to create a customizable resume website.  
You can update the `src/resume.json` file to generate different resumes for different job applications by editing only the necessary parts.

---

## Features

- Resume data driven by JSON
- Easy to customize and extend
- Fast development with Vite
- Supports environment variables (via `.env` file)
- Ready for deployment to GitHub Pages, Vercel, Netlify, etc.

---

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm (comes with Node.js)

### Installation

#### Clone the repo:

```bash
git clone https://github.com/achalofficial/Resume
cd Resume
```

#### Install dependencies:
```bash
npm install
```

#### Run the development server:
```bash
npm run dev
```

Open your browser and visit http://localhost:5173 to see your resume.

### Project Structure 

```bash

resume-site/
├── index.html           # Main HTML file
├── src/
│   ├── App.jsx          # Main React component
│   ├── index.jsx        # Entry point for React
│   └── resume.json      # Resume data in JSON format
├── vite.config.js       # Vite configuration
├── package.json         # Node.js package info and scripts
├── .env                 # Environment variables (ignored by git)
└── .gitignore           # Git ignore rules

```

### Contributing
Feel free to open issues or submit pull requests to improve the project!

### License
This project is open source and available under the MIT License
