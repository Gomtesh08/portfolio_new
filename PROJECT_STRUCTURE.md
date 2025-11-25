# Project Structure

```
portfolio/
│
├── frontend/                          # React Frontend
│   ├── public/                        # Static assets
│   │   └── resume.pdf                 # Your resume (add this)
│   │
│   ├── src/
│   │   ├── components/                # React components
│   │   │   ├── Navbar.jsx            # Navigation bar with theme toggle
│   │   │   ├── Hero.jsx              # Hero section with CTA buttons
│   │   │   ├── About.jsx             # About, skills, education, achievements
│   │   │   ├── Experience.jsx        # Work experience timeline
│   │   │   ├── Projects.jsx          # Projects with filtering
│   │   │   ├── Contact.jsx           # Contact form
│   │   │   └── Footer.jsx            # Footer with links
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.jsx      # Dark mode context
│   │   │
│   │   ├── data/
│   │   │   └── portfolioData.js      # All your personal data ⭐
│   │   │
│   │   ├── App.jsx                   # Main app component
│   │   ├── main.jsx                  # React entry point
│   │   └── index.css                 # Global styles + Tailwind
│   │
│   ├── .env.development              # Dev environment variables
│   ├── .env.production               # Prod environment variables
│   ├── .env.example                  # Environment template
│   ├── .gitignore                    # Git ignore rules
│   ├── index.html                    # HTML template
│   ├── package.json                  # Frontend dependencies
│   ├── postcss.config.js             # PostCSS configuration
│   ├── tailwind.config.js            # Tailwind configuration
│   └── vite.config.js                # Vite configuration
│
├── backend/                           # Node.js/Express Backend
│   ├── routes/
│   │   ├── contact.js                # Contact form API
│   │   └── projects.js               # Projects API
│   │
│   ├── .env                          # Environment variables ⭐
│   ├── .env.example                  # Environment template
│   ├── .gitignore                    # Git ignore rules
│   ├── package.json                  # Backend dependencies
│   ├── README.md                     # Backend documentation
│   └── server.js                     # Express server
│
├── .gitignore                        # Root git ignore
├── package.json                      # Root package with scripts
│
├── README.md                         # Main documentation
├── SETUP.md                          # Setup instructions
├── QUICKSTART.md                     # Quick start guide ⭐
├── DEPLOYMENT.md                     # Deployment guide
├── FEATURES.md                       # Feature list
└── PROJECT_STRUCTURE.md              # This file

```

## 📁 Key Files to Customize

### ⭐ Must Edit

1. **`frontend/src/data/portfolioData.js`**
   - Your personal information
   - Skills, experience, projects
   - Social media links

2. **`backend/.env`**
   - Email configuration (optional)
   - Port settings

3. **`frontend/public/resume.pdf`**
   - Add your resume PDF here

### 🎨 Optional Customization

1. **`frontend/tailwind.config.js`**
   - Change colors, fonts, animations

2. **`frontend/src/index.css`**
   - Global styles, custom CSS

3. **`frontend/.env.production`**
   - Update with deployed backend URL

## 🚀 Important Scripts

### Root Level
```bash
npm run install:all    # Install all dependencies
npm run dev            # Run both frontend & backend
npm run dev:frontend   # Run only frontend
npm run dev:backend    # Run only backend
```

### Frontend
```bash
npm run dev            # Start dev server
npm run build          # Build for production
npm run preview        # Preview production build
```

### Backend
```bash
npm run dev            # Start with nodemon (auto-reload)
npm start              # Start production server
```

## 📦 Dependencies

### Frontend
- **react** - UI library
- **vite** - Build tool
- **tailwindcss** - Styling
- **framer-motion** - Animations
- **react-icons** - Icons
- **axios** - HTTP client

### Backend
- **express** - Web framework
- **cors** - CORS middleware
- **nodemailer** - Email sending
- **express-validator** - Input validation
- **dotenv** - Environment variables

## 🌐 URLs

### Development
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- API Health: http://localhost:5000/api/health

### API Endpoints
- `POST /api/contact` - Contact form
- `GET /api/projects` - All projects
- `GET /api/projects/:id` - Single project
- `GET /api/projects/tech/list` - Technologies
- `GET /api/health` - Health check

## 📝 Configuration Files

### Frontend
- **vite.config.js** - Vite settings
- **tailwind.config.js** - Tailwind theme
- **postcss.config.js** - PostCSS plugins
- **.env.development** - Dev environment
- **.env.production** - Prod environment

### Backend
- **.env** - Environment variables
- **server.js** - Express configuration

## 🎯 Data Flow

```
User Browser
    ↓
React Components (Frontend)
    ↓
Axios HTTP Request
    ↓
Express Server (Backend)
    ↓
Route Handlers
    ↓
Nodemailer (Email) / JSON Response
    ↓
Back to Frontend
    ↓
Update UI
```

## 🔒 Environment Variables

### Frontend (.env.development)
```env
VITE_API_URL=http://localhost:5000
```

### Backend (.env)
```env
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=gomteshkote08@gmail.com
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Color Scheme

- **Primary**: Blue (#3b82f6)
- **Secondary**: Purple (#9333ea)
- **Background Light**: White/Gray
- **Background Dark**: Gray-900
- **Accent**: Gradient (Blue → Purple)

## 🚀 Deployment Targets

- **Frontend**: Vercel (recommended)
- **Backend**: Render, Railway, or Heroku
- **Alternative**: Both on same platform (Railway)

## 📚 Documentation Files

- **README.md** - Overview, features, installation
- **SETUP.md** - Detailed setup guide
- **QUICKSTART.md** - 3-minute quick start
- **DEPLOYMENT.md** - Deployment instructions
- **FEATURES.md** - Complete feature list
- **PROJECT_STRUCTURE.md** - This file

