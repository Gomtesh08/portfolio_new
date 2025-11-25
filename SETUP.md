# Setup Instructions

Follow these steps to get your portfolio website running locally.

## Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

Check your versions:
```bash
node --version
npm --version
```

## Quick Start (Recommended)

### Option 1: Install and Run Everything at Once

```bash
# Install all dependencies (frontend + backend)
npm run install:all

# Run both frontend and backend concurrently
npm run dev
```

This will start:
- Frontend on `http://localhost:3000`
- Backend on `http://localhost:5000`

## Manual Setup

### Option 2: Run Frontend and Backend Separately

#### Terminal 1 - Backend

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Start the server
npm run dev
```

Backend will run on `http://localhost:5000`

#### Terminal 2 - Frontend

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

Frontend will run on `http://localhost:3000`

## Configuration

### Backend Email Setup (Optional)

If you want the contact form to send emails:

1. Open `backend/.env`
2. Add your Gmail credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=gomteshkote08@gmail.com
```

**Getting Gmail App Password:**
1. Go to your Google Account settings
2. Security → 2-Step Verification (enable if not already)
3. App passwords → Generate new app password
4. Copy the 16-character password

**Note:** The contact form will work without email configuration - messages will just be logged to the console.

## Customization

### Update Your Information

Edit `frontend/src/data/portfolioData.js` to update:
- Personal details (name, email, phone, etc.)
- Skills
- Work experience
- Projects
- Education
- Social media links

### Add Your Resume

1. Add your resume PDF to `frontend/public/resume.pdf`
2. The download button will automatically work

### Add Project Images (Optional)

1. Add project images to `frontend/public/projects/`
2. Update image paths in `portfolioData.js`

## Testing

### Test the Contact Form

1. Open `http://localhost:3000`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check the backend terminal for logs
5. If email is configured, check your inbox

### Test Dark Mode

Click the sun/moon icon in the navbar to toggle between light and dark themes.

### Test Responsiveness

1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different screen sizes

## Building for Production

### Frontend

```bash
cd frontend
npm run build
```

This creates an optimized build in `frontend/dist/`

### Preview Production Build

```bash
cd frontend
npm run preview
```

## Troubleshooting

### Port Already in Use

If port 3000 or 5000 is already in use:

**Frontend:**
Edit `frontend/vite.config.js`:
```javascript
server: {
  port: 3001, // Change to any available port
}
```

**Backend:**
Edit `backend/.env`:
```env
PORT=5001
```

### Dependencies Installation Failed

Try clearing npm cache:
```bash
npm cache clean --force
npm run install:all
```

### CORS Errors

Make sure:
1. Backend is running on `http://localhost:5000`
2. Frontend is running on `http://localhost:3000`
3. `FRONTEND_URL` in `backend/.env` matches your frontend URL

### Module Not Found Errors

Delete `node_modules` and reinstall:
```bash
# In frontend folder
rm -rf node_modules package-lock.json
npm install

# In backend folder
rm -rf node_modules package-lock.json
npm install
```

## Next Steps

1. ✅ Customize your information in `portfolioData.js`
2. ✅ Add your resume PDF
3. ✅ Test all features locally
4. ✅ Configure email (optional)
5. ✅ Add project images (optional)
6. 🚀 Deploy to production (see DEPLOYMENT.md)

## Need Help?

- Check the main README.md for more information
- Review DEPLOYMENT.md for deployment instructions
- Check the code comments for implementation details

## Development Tips

### Hot Reload

Both frontend and backend support hot reload:
- Frontend: Changes auto-refresh the browser
- Backend: Server auto-restarts on file changes (using nodemon)

### Code Structure

```
frontend/src/
├── components/     # React components
├── context/        # React context (theme)
├── data/          # Portfolio data
├── App.jsx        # Main app component
└── index.css      # Global styles

backend/
├── routes/        # API routes
└── server.js      # Express server
```

### Making Changes

1. Edit files in `src/` folders
2. Changes will auto-reload
3. Test in browser
4. Commit when ready

Happy coding! 🚀

