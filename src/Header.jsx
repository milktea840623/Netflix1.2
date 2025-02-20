import React from 'react';
import style from './Header.module.css'; // 假設你有一個CSS檔案來處理樣式

function Header() {
    return(
        <header className={style.header}>
            <div className={style.logo}>
                <a href="#home">Netflix</a>
            </div>
            <nav className={style.navigation}>
                <ul>
                    <li><a href="#home">首頁</a></li>
                    <li><a href="#series">影集</a></li>
                    <li><a href="#movies">電影</a></li>
                    <li><a href="#new">最新上架</a></li>
                    <li><a href="#mylist">我的片單</a></li>
                </ul>
            </nav>
            <div className={style.userOptions}>
                <a href="#search">搜尋</a>
                <a href="#notifications">通知</a>
                <a href="#profile">個人資料</a>
            </div>
        </header>
    )
}
export default Header;