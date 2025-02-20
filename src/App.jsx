import React, { useEffect } from 'react';
import Header from './Header.jsx'
import styles from './App.module.css'
function App() {

  return (
    <div>
      <Header />
      <div>
        <h1 className={styles.title}>取得手機遊戲</h1>
      </div>
      
      <div> 
        滾動以查看效果
      </div>
    </div>

  );
}

export default App;