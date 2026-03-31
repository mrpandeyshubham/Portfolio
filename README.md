# 🚀 Shubham Kumar Pandey - Developer Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()

Welcome to the repository for my personal developer portfolio! This project is a blazingly fast, highly-optimized static web application designed to showcase my software engineering skills, certifications, open-source projects, and educational background.

## 🌐 Live Website
**[View the Live Portfolio Here](https://mrpandeyshubham.github.io/Portfolio/)**

## ✨ Features
- **Dynamic Animations:** Implemented using `GSAP` and `ScrollReveal` for incredibly smooth user interactions and scroll triggers.
- **Client-Side Contact Form:** Secure `mailto:` integration to allow instant message staging directly from the site without the risks of exposed third-party API keys.
- **Responsive Architecture:** Fully optimized with custom media queries natively stretching across Desktop, Tablet, and Mobile Android/iOS viewports.
- **Performance & Security:** Strictly enforced `rel="noopener noreferrer"`, Subresource Integrity (SRI) on all external CDNs, and robust `<meta>` Open Graph components for top-tier SEO load times.

## 📂 Project Structure

The codebase is organized into a clean, asset-driven modular architecture:

```text
Portfolio/
├── index.html                   # Main application entry point
├── README.md                    # Project documentation
├── LICENSE                      # Open-source MIT License
└── assets/                      # Core application assets
    ├── css/                     # Vanilla stylesheets
    ├── js/                      # First-party logic (GSAP initialization, Modals)
    ├── vendor/                  # Third-party quarantined logic (MixItUp)
    ├── docs/                    # Resumes and PDFs
    └── img/                     # Atomically categorized media
        ├── certs/               # Certification badges 
        ├── edu/                 # Educational institution logos
        ├── profile/             # Core profile imagery
        ├── projects/            # Portfolio work screenshots
        └── tech/                # Technology SVG icon sets
```

## 🛠️ Built With

* Vanilla **HTML5** (Semantics & Accessibility)
* Vanilla **CSS3** (CSS Variables, Flexbox, Grid)
* Vanilla **JavaScript** (ES6+)
* **GSAP** (ScrollTrigger animations)
* **ScrollReveal.js**
* **MixItUp 3** (Portfolio filtering logic)

## 📖 Local Development

Because this is a static site without a bulky framework structure, deploying and running it locally is instantaneous. 

1. Clone the repository:
   ```bash
   git clone https://github.com/mrpandeyshubham/Portfolio.git
   ```
2. Navigate into the directory:
   ```bash
   cd Portfolio
   ```
3. Run a local development server (Using Python):
   ```bash
   python -m http.server 8080
   ```
4. Open your browser and navigate to `http://localhost:8080/`.

## 📄 License
This codebase is completely open-source and formally licensed under the **MIT License**. Check out the [LICENSE](LICENSE) file for more details. Feel free to fork and use this repository as a structural template for your own developer portfolio!
