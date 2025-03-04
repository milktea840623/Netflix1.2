import React, { useState, useEffect } from 'react';
import style from './Header.module.css';

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
                    <img src="/image/search.png" alt="搜尋圖示" className={style.iconSearch} />
                </a>
                <a
                    href="#notifications"
                    className={style.bellIconBlock}
                    onMouseEnter={() => setShowBellMenu(true)}
                    onMouseLeave={() => setShowBellMenu(false)}
                >
                    <img src="/image/bell.png" alt="通知圖示" className={style.iconBell} />
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
                    <img src="/image/user.png" alt="用戶切換圖示" className={style.iconUser} />
                    <img
                        src="/image/down.png"
                        alt="小箭頭"
                        className={`${style.iconUpload} ${showUserMenu ? style.iconUploadRotated : ''}`}
                    />
                    {showUserMenu && (
                        <ul className={style.dropdownMenuUser}>
                            <div className={style.userNameList}>
                                <li>Ian</li>
                                <li>Milktea</li>
                            </div>
                            <div className={style.userManageMenu}>
                                <li>管理使用者</li>
                                <li>轉移使用者</li>
                                <li>帳戶</li>
                                <li>說明中心</li>
                            </div>
                            <div className={style.userLogout}>
                                <li>登出 Netflix</li>
                            </div>
                        </ul>
                    )}
                </a>
            </div>
        </header>
    );
}

export default Header;

