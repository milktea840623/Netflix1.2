import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './Register.module.css';

const Register = () => {
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
        <div className={Style.registerWrapper}>
            <div className={Style.register}>
                <div className={Style.registerContainer}>
                    <div className={Style.monthlyFee}>
                        <h1 className={Style.monthlyFeeTitle}>看不完的電影與節目，還有更多精彩內容</h1>
                        <p className={Style.monthlyFeeDescription}>月費 $290 起，您可以隨時取消。</p>
                    </div>
                    <div className={Style.registerBlock}>
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
                </div>
            </div>
        </div>
    )
}

export default Register;