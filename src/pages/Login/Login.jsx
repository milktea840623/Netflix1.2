import { useState } from 'react';
import Style from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const [showLoginCode, setShowLoginCode] = useState(false);
    const [showMore, setShowMore] = useState(false);

    return (
        <div className={Style.loginContainer}>
            <header className={Style.loginHeader}>
                <div className={Style.logo}>
                    <span className={Style.logoText}>NETFLIX</span>
                    <img
                        src="/image/netflix-logo.png"
                        alt="Netflix"
                        className={Style.logoImage}
                    />
                </div>
            </header>
            <div className={Style.loginBody}>
                <div className={Style.loginFormContainer}>
                    <h1 className={Style.formTitle}>登入</h1>

                    <form className={Style.loginForm}>
                        {!showLoginCode ? (
                            // 密碼登入頁面
                            <>
                                <div className={Style.formGroup}>
                                    <input
                                        type="text"
                                        className={Style.formInput}
                                        placeholder="電子郵件地址或手機號碼"
                                    />
                                </div>

                                <div className={Style.formGroup}>
                                    <input
                                        type="password"
                                        className={Style.formInput}
                                        placeholder="密碼"
                                    />
                                </div>

                                <button type="button" className={Style.loginButton}>
                                    登入
                                </button>

                                <div className={Style.divider}>或</div>

                                <button
                                    type="button"
                                    className={Style.passwordLoginButton}
                                    onClick={() => setShowLoginCode(true)}
                                >
                                    使用登入碼
                                </button>

                                <div className={Style.forgotPassword}>
                                    <Link to="/loginHelp" className={Style.forgotPasswordLink}>
                                        忘記密碼？
                                    </Link>
                                </div>
                            </>
                        ) : (
                            // 登入碼頁面
                            <>
                                <div className={Style.formGroup}>
                                    <input
                                        type="text"
                                        className={Style.formInput}
                                        placeholder="電子郵件地址或手機號碼"
                                    />
                                </div>

                                <p className={Style.loginCodeText}>
                                    可能需按簡訊與數據費率付費
                                </p>

                                <button type="button" className={Style.loginButton}>
                                    傳送登入碼
                                </button>

                                <div className={Style.divider}>或</div>

                                <button
                                    type="button"
                                    className={Style.passwordLoginButton}
                                    onClick={() => setShowLoginCode(false)}
                                >
                                    使用密碼
                                </button>

                                <a href="#" className={Style.forgotPassword}>
                                    忘記電子郵件地址或電話號碼？
                                </a>
                            </>
                        )}

                        <div className={Style.formHelpers}>
                            <label className={Style.rememberMe}>
                                <input type="checkbox" className={Style.rememberMeCheckbox} />
                                <span className={Style.rememberMeText}>記住我</span>
                            </label>
                        </div>
                    </form>

                    <div className={Style.formFooter}>
                        <p className={Style.signupText}>
                            尚未加入 Netflix？
                            <a href="#" className={Style.signupLink}>馬上註冊</a>
                        </p>
                        <div className={Style.captchaContainer}>
                            <p className={Style.captchaText}>
                                此頁面受到 Google reCAPTCHA 保護，以確認您不是機器人。<br />
                                {!showMore ? (
                                    <button
                                        className={Style.learnMoreBtn}
                                        onClick={() => setShowMore(true)}
                                    >
                                        進一步了解
                                    </button>
                                ) : (
                                    <>
                                        <br />
                                        由 Google reCAPTCHA 收集的資訊受《
                                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={Style.policyLink}>隱私權條款</a>
                                        》與《
                                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className={Style.policyLink}>服務條款</a>
                                        》約束，用於提供、維持並提升 reCAPTCHA 服務及安全維護（這些資訊不會用於 Google 個人化廣告）。
                                    </>
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.loginFooter}>
            <div className={Style.footerContent}>
                <div className={Style.contactUs}>
                    <Link to="/contactUs" className={Style.contactUsLink}>
                        <h5>
                            有疑問嗎？請聯絡我們。
                        </h5>
                    </Link>
                </div>
                <div className={Style.information}>
                        <ul className={Style.footerButton}>
                            <li><button>常見問題</button></li>
                            <li><button>說明中心</button></li>
                            <li><button>使用條款</button></li>
                            <li><button>隱私權</button></li>
                            <li><button>Cookie 設定</button></li>
                            <li><button>企業資訊</button></li>
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
                                    <path d="M8 11L3 6h10l-5 5z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;