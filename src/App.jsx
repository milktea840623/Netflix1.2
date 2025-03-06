import React from 'react';
import Header from './Header.jsx'
import VideoSection from './VideoSection.jsx';
import Best from './Best.jsx';

function App() {

  const images = [
    'image/Arise.jpg',
    'image/Dcat.jpg',
    'image/Xgll.jpg',
    'image/Ddd.jpg',
    'image/Arise.jpg',
    'image/Dcat.jpg',
    'image/Xgll.jpg',
    'image/Ddd.jpg',
  ]

  const imagesHistory = [
    'image/Onepiece.jpg',
    'image/Naruto.jpeg',
    'image/Digimon.jpg',
    'image/Pokemon.jpg',
    'image/Onepiece.jpg',
    'image/Naruto.jpeg',
    'image/Digimon.jpg',
    'image/Pokemon.jpg',
  ]

  const imagesJpAnime = [
    'image/Shin.jpg',
    'image/Knife.jpg',
    'image/Hero.jpg',
    'image/Shop.jpg',
    'image/Shin.jpg',
    'image/Knife.jpg',
    'image/Hero.jpg',
    'image/Shop.jpg',
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