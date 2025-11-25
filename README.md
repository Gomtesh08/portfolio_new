# Gomtesh Kote - Portfolio Website

A modern, fully responsive portfolio website built with React and Vite.

## 🚀 Features

- **Modern Design**: Clean, professional UI with glassmorphism and gradient effects
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Contact Form**: Opens default email client with pre-filled information
- **Project Filtering**: Filter projects by technology stack
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- React Router DOM

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will run on `http://localhost:5173`

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Set the root directory to `frontend`
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import the project in Netlify
3. Set the build command to `npm run build`
4. Set the publish directory to `frontend/dist`
5. Deploy

### Other Platforms

The built files will be in `frontend/dist` after running `npm run build`. You can deploy these static files to any hosting service (GitHub Pages, Cloudflare Pages, etc.).

## 📁 Project Structure

```
portfolio/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── data/
│   │   │   └── portfolioData.js
│   │   ├── pages/
│   │   │   └── RocketCardDemo.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit `frontend/src/data/portfolioData.js` to update:
- Personal details
- Skills
- Experience
- Projects
- Education
- Social links

### Styling

- Colors: Edit `frontend/tailwind.config.js`
- Animations: Modify in `frontend/src/index.css`
- Components: Update individual component files

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**Gomtesh Kote**
- Email: gomteshkote08@gmail.com
- GitHub: [@Gomtesh08](https://github.com/Gomtesh08)
- LinkedIn: [Gomtesh Kote](https://www.linkedin.com/in/gomtesh-kote-ab3011234/)
- LeetCode: [@Gomteshkote08](https://leetcode.com/u/Gomteshkote08/)

## 🙏 Acknowledgments

- Icons: React Icons
- Animations: Framer Motion
- Styling: Tailwind CSS

