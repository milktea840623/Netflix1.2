import { useState } from 'react';
import Style from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    return (
        <div className={Style.footer}>
            <div className={Style.register}>
                <form className={Style.registerForm}>
                    <h5 className={Style.registerFormTitle}>
                        準備開始觀賞了嗎？請輸入您的電子郵件地址，建立或重新啟用會員資格。
                    </h5>
                    <div className={Style.registerFormInputBlock}>
                        <div className={Style.inputWrapper}>
                            <input
                                type="email"
                                className={`${Style.registerFormInput} ${hasError ? Style.error : ''}`}
                                value={email}
                                onChange={handleEmailChange}
                                placeholder=" " />
                            <label className={Style.inputLabel}>電子郵件地址</label>
                            {hasError && (
                                <div className={Style.errorMessage}>
                                    電子郵件地址必填
                                </div>
                            )}
                        </div>
                        <button className={Style.registerButton}>開始使用</button>
                    </div>
                </form>
            </div>
            <div className={Style.contactUs}>
                <Link to="/contactUs">
                    <h5>
                    有疑問嗎？請聯絡我們。
                    </h5>
                </Link>
            </div>
            <div className={Style.information}>
<ul>
    <li>
        <button>常見問題</button>
    </li>
    <li>
        
    </li>
</ul>
            </div>
            <div className={Style.language}>
                    <div className={Style.selectWrapper}>
                        <div className={Style.languageIconBlock}>
                            <img src="/image/language.png" alt="language" className={Style.languageIcon} />
                        </div>
                        <select className={Style.languageSelect}>
                            <option value="zh-TW">中文</option>
                            <option value="en-US">English</option>
                        </select>
                        <div className={Style.arrowIcon}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 11L3 6h10l-5 5z" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>
                </div>
            <div className={Style.source}>
<h6>Netflix 台灣</h6>
            </div>

        </div>
    )
}

export default Footer;