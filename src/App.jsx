import React, { useEffect } from 'react';
import Header from './Header.jsx'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div>
        <h1>取得手機遊戲</h1>
      </div>
      
      <div style={{ height: '2000px' }}> 
        滾動以查看效果
      </div>
    </div>

  );
}

export default App;