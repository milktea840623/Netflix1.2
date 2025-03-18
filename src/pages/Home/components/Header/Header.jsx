import Style from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={Style.Header}>
            <div className={Style.logo}>Netflix</div>
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
        </header>
    )
}

export default Header;