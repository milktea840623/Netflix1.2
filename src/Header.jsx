import React, { useState, useEffect } from 'react';
import style from './Header.module.css';
import SearchIcon from '/public/image/search.png';
import BellIcon from '/public/image/bell.png';
import UserIcon from '/public/image/user.png';
import UploadIcon from '/public/image/upload.png';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showBellMenu, setShowBellMenu] = useState(false);
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <header className={`${style.header} ${isScrolled ? style.scrolled : ''}`}>
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
                <a href="#search">
                    <img src={SearchIcon} alt="搜尋圖示" className={style.iconSearch} />
                </a>
                <a 
                    href="#notifications" 
                    className={style.bellIconBlock}
                    onMouseEnter={() => setShowBellMenu(true)}
                    onMouseLeave={() => setShowBellMenu(false)}
                >
                    <img src={BellIcon} alt="通知圖示" className={style.iconBell} />
                    {showBellMenu && (
                        <ul className={style.dropdownMenuBell}>
                            {/* 漢堡選單內容 */}
                            <li>abc</li>
                            <li>123</li>
                        </ul>
                    )}
                </a>
                <a 
                    href="#profile" 
                    className={style.userIconBlock}
                    onMouseEnter={() => setShowUserMenu(true)}
                    onMouseLeave={() => setShowUserMenu(false)}
                >
                    <img src={UserIcon} alt="用戶切換圖示" className={style.iconUser} />
                    <img 
                        src={UploadIcon} 
                        alt="小箭頭" 
                        className={`${style.iconUpload} ${showUserMenu ? style.iconUploadRotated : ''}`} 
                    />
                    {showUserMenu && (
                        <ul className={style.dropdownMenuUser}>
                            <li>000</li>
                            <li>登出</li>
                        </ul>
                    )}
                </a>
            </div>
        </header>
    );
}

export default Header;

