import { useState } from 'react';
import Style from './Footer.module.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState(false);
    const [errorType, setErrorType] = useState('');
    const navigate = useNavigate();

    // 郵件驗證函數
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);

        if (value === '') {
            // 當輸入為空
            setHasError(false);
            setErrorType('');
        } else if (!validateEmail(value)) {
            // 當輸入的不是有效的電子郵件
            setHasError(true);
            setErrorType('invalid');
        } else {
            // 當輸入有效
            setHasError(false);
            setErrorType('');
        }
    };

    // 處理表單提交
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === '') {
            // 如果提交時輸入為空
            setHasError(true);
            setErrorType('empty');
        } else if (!validateEmail(email)) {
            // 如果提交時輸入的不是有效的電子郵件
            setHasError(true);
            setErrorType('invalid');
        } else {
            // 郵件有效，導航到註冊頁面
            // 可以將電子郵件作為參數傳遞
            navigate('/register', { state: { email: email } });
        }
    };

    return (
        <div className={Style.footer}>
            <div className={Style.register}>
                <form className={Style.registerForm} onSubmit={handleSubmit}>
                    <h2 className={Style.registerFormTitle}>
                        準備開始觀賞了嗎？請輸入您的電子郵件地址，建立或重新啟用會員資格。
                    </h2>
                    <div className={Style.registerFormInputBlock}>
                        <div className={Style.inputWrapper}>
                            <input
                                type="email"
                                className={`${Style.registerFormInput} ${hasError ? Style.error : ''}`}
                                value={email}
                                onChange={handleEmailChange}
                                placeholder=" "
                                onBlur={() => {
                                    if (email === '') {
                                        setHasError(true);
                                        setErrorType('empty');
                                    }
                                }}
                            />
                            <label className={Style.inputLabel}>電子郵件地址</label>
                            {hasError && (
                                <div className={Style.errorMessage}>
                                    {errorType === 'empty' ? '電子郵件地址必填' :
                                        errorType === 'invalid' ? '請輸入有效的電子郵件地址' : ''}
                                </div>
                            )}
                        </div>
                        <button
                            type="submit"
                            className={Style.registerButton}
                            disabled={hasError || email === ''} // 當有錯誤或郵件為空時禁用按鈕
                        >
                            開始使用
                        </button>
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
                <ul className={Style.footerButton}>
                    <li><button>常見問題</button></li>
                    <li><button>說明中心</button></li>
                    <li><button>帳戶</button></li>
                    <li><button>媒體中心</button></li>
                    <li><button>投資人關係</button></li>
                    <li><button>工作機會</button></li>
                    <li><button>觀賞方式</button></li>
                    <li><button>使用條款</button></li>
                    <li><button>隱私權</button></li>
                    <li><button>Cookie 設定</button></li>
                    <li><button>企業資訊</button></li>
                    <li><button>聯絡我們</button></li>
                    <li><button>速度測試</button></li>
                    <li><button>法律聲明</button></li>
                    <li><button>Netflix 獨家</button></li>
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
            <div className={Style.source}>
                <h6>Netflix 台灣</h6>
            </div>
        </div>
    )
}

export default Footer;