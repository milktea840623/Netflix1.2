import { useState } from 'react';
import Style from './Register.module.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [hasError, setHasError] = useState(false);

    // 郵件驗證函數
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (value !== '') {
            setHasError(value !== '' && !validateEmail(value));
        }
    };

    return (
        <div className={Style.registerWrapper}>
            <div className={Style.register}>
                <div className={Style.registerContainer}>
                    <div className={Style.monthlyFee}>
                        <h1 className={Style.monthlyFeeTitle}>看不完的電影與節目，還有更多精彩內容</h1>
                        <p className={Style.monthlyFeeDescription}>月費 $290 起，您可以隨時取消。</p>
                    </div>
                    <div className={Style.registerBlock}>
                        <form className={Style.registerForm}>
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
                                    />
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
                </div>
            </div>
        </div>
    )
}

export default Register;