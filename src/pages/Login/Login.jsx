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
                                <span>記住我</span>
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

            </div>
        </div>
    );
}

export default Login;