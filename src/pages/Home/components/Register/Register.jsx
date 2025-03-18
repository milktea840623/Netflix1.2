import Style from './Register.module.css';

const Register = () => {
    return (
        <div className={Style.register}>
            <img src="/image/BackgroundImg.jpg" alt="BackgroundImage" className={Style.backgroundImage} />
            <div className={Style.registerContainer}>
                <div className={Style.monthlyFee}>
                    <h1 className={Style.monthlyFeeTitle}>看不完的電影與節目，還有更多精彩內容</h1>
                    <p className={Style.monthlyFeeDescription}>月費 $290 起，您可以隨時取消。</p>
                </div>
                <div className={Style.registerBlock}>
                    <form className={Style.registerForm}>
                        <h2>準備開始觀賞了嗎？請輸入您的電子郵件地址，建立或重新啟用會員資格。</h2>
                        <input type="text" placeholder="電子郵件地址" />
                        <button className={Style.registerButton}>開始使用</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;