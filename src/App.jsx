import React from 'react';
import Header from './Header.jsx'
import VideoSection from './VideoSection.jsx';
import Best from './Best.jsx';

function App() {

  const images = [
    'public/image/Arise.jpg',
    'public/image/Dcat.jpg',
    'public/image/Xgll.jpg',
    'public/image/Ddd.jpg',
  ]

  const imagesHistory = [
    'public/image/OnePiece.jpg',
    'public/image/Naruto.jpeg',
    'public/image/Digimon.jpg',
    'public/image/Pokemon.jpg',
  ]

  const imagesJpAnime = [
    'public/image/Shin.jpg',
    'public/image/Knife.jpg',
    'public/image/Hero.jpg',
    'public/image/Shop.jpg',
  ]
  return (
    <div>
      <Header />
      <VideoSection />
      <Best title="本日最佳推薦" exploreButton="探索全部" images={images} />
      <Best title="繼續觀賞" exploreButton="歷史紀錄" images={imagesHistory} />
      <Best title="日本動漫" exploreButton="查看更多" images={imagesJpAnime} />
    </div>
  );
}

export default App;