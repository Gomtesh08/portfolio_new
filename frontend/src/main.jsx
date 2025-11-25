import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import RocketCardDemo from './pages/RocketCardDemo.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/rocket-demo" element={<RocketCardDemo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

