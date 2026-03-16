import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AndroidGuide from './AndroidGuide.tsx';
import AndroidVideoGuide from './AndroidVideoGuide.tsx';
import IosGuide from './IosGuide.tsx';
import IosVideoGuide from './IosVideoGuide.tsx';
import WindowsGuide from './WindowsGuide.tsx';
import WindowsVideoGuide from './WindowsVideoGuide.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/android-guide" element={<AndroidGuide />} />
        <Route path="/android-video-guide" element={<AndroidVideoGuide />} />
        <Route path="/ios-guide" element={<IosGuide />} />
        <Route path="/ios-video-guide" element={<IosVideoGuide />} />
        <Route path="/windows-guide" element={<WindowsGuide />} />
        <Route path="/windows-video-guide" element={<WindowsVideoGuide />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
