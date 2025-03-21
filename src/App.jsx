import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/Home.jsx';
import LoginPage from './pages/Login/Login.jsx';
import ContactUsPage from './pages/ContactUs/ContactUs.jsx';
import BrowsePage from './pages/Browse/Browse.jsx';
import MemberPage from './pages/Member/Member.jsx';
import VideoPreviewPage from './pages/VideoPreview/VideoPreview.jsx';
import VideoPlayerPage from './pages/VideoPlayer/VideoPlayer.jsx';
import RegisterPage from './pages/Register/Register.jsx';


const App =() => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/contactUs" element={<ContactUsPage />} />
        <Route path="/Browse" element={<BrowsePage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/video-preview" element={<VideoPreviewPage />} />
        <Route path="/video-player" element={<VideoPlayerPage />} />
      </Routes>
  );
} 

export default App;