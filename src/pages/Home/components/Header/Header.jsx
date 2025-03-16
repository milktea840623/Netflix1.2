import Style from './Header.module.css';

const Header = () => {
    return (
        <header className={Style.Header}>
            <div className={Style.logo}>Netflix</div>
            <div className={Style.headerRight}>
                <div className={Style.languageBlock}>
                    <img src="/image/language.png" alt="language" className={Style.languageIcon} />
                    <select className={Style.languageSelect}>
                        <option value="zh-TW" selected>中文</option > 
                        <option value="en-US">英文</option>
                    </select>
                </div>
                <div className={Style.logoutBlock}>
                    <button className={Style.logoutButton}>登出</button>
                </div>

            </div>
        </header>
    )
}

export default Header;