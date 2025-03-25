import Style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={Style.headerContainer}>
            <header className={Style.Header}>
                <div className={Style.headerLeftOuter}>
                    <div className={Style.headerLeft}>
                    <div className={Style.logo}>
                            <span className={Style.logoText}>Netflix</span>
                            <img 
                                src="/image/H.png" 
                                alt="Netflix" 
                                className={Style.logoImage} 
                            />
                        </div>
                    </div>
                </div>
                <div className={Style.headerRightOuter}>
                    <div className={Style.headerRight}>
                        <div className={Style.languageBlock}>
                            <div className={Style.selectWrapper}>
                                <div className={Style.languageIconBlock}>
                                    <img src="/image/language.png" alt="language" className={Style.languageIcon} />
                                </div>
                                <select className={Style.languageSelect}>
                                    <option value="zh-TW" selected>中文</option>
                                    <option value="en-US">English</option>
                                </select>
                                <span className={Style.selectedLanguage}>中文</span>
                                <div className={Style.arrowIcon}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 11L3 6h10l-5 5z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={Style.loginBlock}>
                            <Link to="/login" className={Style.loginButton}>登入</Link>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;