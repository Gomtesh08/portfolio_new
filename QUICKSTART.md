# 🚀 Quick Start Guide

Get your portfolio running in 2 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This installs all dependencies for the frontend.

## Step 2: Start Development Server

```bash
npm run dev
```

This starts the development server at **http://localhost:5173**

## Step 3: Open in Browser

Navigate to **http://localhost:5173** and you should see your portfolio!

---

## ✏️ Customize Your Portfolio

### Update Your Information

Edit `frontend/src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  email: "your-email@example.com",
  // ... update all fields
};
```

### Add Your Resume

1. Place your resume PDF in `frontend/public/resume.pdf`
2. The download button will work automatically

### Contact Form

The contact form uses a `mailto:` link that opens the user's default email client with pre-filled information. No backend configuration needed!

---

## 🎨 Customization Tips

### Change Colors

Edit `frontend/tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-darker-color',
  }
}
```

### Add Projects

Edit `frontend/src/data/portfolioData.js`:

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    techStack: ["React", "Node.js"],
    github: "https://github.com/yourusername/project",
    featured: true
  }
];
```

### Update Skills

```javascript
export const skills = {
  programming: ["JavaScript", "Python", "Java"],
  frameworks: ["React", "Express", "Django"],
  // ... add your skills
};
```

---

## 🚀 Deploy to Production

### Frontend (Vercel)

```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```

### Backend (Render)

1. Push to GitHub
2. Go to render.com
3. New Web Service → Connect repo
4. Root: `backend`
5. Build: `npm install`
6. Start: `npm start`
7. Add environment variables

**See DEPLOYMENT.md for detailed instructions**

---

## 🆘 Troubleshooting

### Port Already in Use

**Frontend**: Edit `frontend/vite.config.js` → change port
**Backend**: Edit `backend/.env` → change PORT

### CORS Errors

Make sure backend is running on port 5000 and frontend on 3000.

### Dependencies Failed

```bash
npm cache clean --force
npm run install:all
```

---

## 📚 Documentation

- **README.md** - Overview and features
- **SETUP.md** - Detailed setup instructions
- **DEPLOYMENT.md** - Deployment guide
- **FEATURES.md** - Complete feature list

---

## ✅ Checklist

- [ ] Install dependencies (`npm run install:all`)
- [ ] Start dev servers (`npm run dev`)
- [ ] Update personal info in `portfolioData.js`
- [ ] Add resume PDF to `frontend/public/`
- [ ] Test contact form
- [ ] Test dark mode
- [ ] Customize colors (optional)
- [ ] Configure email (optional)
- [ ] Deploy to production

---

**Need help?** Check the detailed guides or open an issue on GitHub.

**Happy coding!** 🎉

