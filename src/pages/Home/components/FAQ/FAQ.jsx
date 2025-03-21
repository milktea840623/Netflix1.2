import { useState } from 'react';
import Style from './FAQ.module.css'

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const QA=[
        {
            question: 'Netflix是什麼？',
            answer: `Netflix是串流服務，透過數千種可連結網路的行動裝置，提供各種獲獎肯定的節目、電影、動畫、紀錄片等精彩內容。
            
            只要支付一筆經濟實惠的月費，就能隨時隨地，盡情觀賞，毫無廣告。時時都有新的內容供您探索，而且每星期都會加入新的目與電影！`
        },
        {
            question: 'Netflix如何計費？',
            answer: '只要支付一筆固定月費，就能用您的智慧型手機、平板電腦、智慧型電視、筆記型電腦或串流裝置觀賞Netflix。各種方案介於每月＄290至$460。無額外費用，不需綁約。'
        },
        {
            question: '在哪裡觀賞？',
            answer: `隨時隨地盡情觀賞。登入您的Netflix帳戶，使用個人電腦在netflix.com網站上觀賞，或是使用提供Netflix App的任何可上網行動裝置，包括智慧型電視、智慧型手機、平板電腦、串流媒體播放器和遊戲機觀賞。
            
            您也能使用IOS或Android版App下載最喜歡的節目。使用下載功能，就能在外出且沒有網路連線時觀賞。Netflix時時帶著走。`
        },
        {
            question: '如何取消？',
            answer: 'Netflix彈性十足。沒有難懂的合約，也不需綁約。點個兩下，就能線上輕鬆取消您的帳戶。無取消費用，可隨時開始或停用您的帳戶。'
        },
        {
            question: '可以在Netflix上觀賞什麼內容？',
            answer: 'Netflix擁有豐富的影片內容庫，包括長片、紀錄片、節目、動畫、獲獎肯定的Netflix原創作品與更多內容。隨時隨地，盡情觀賞。'
        },
        {
            question: 'Netflix適合兒童觀賞嗎？',
            answer: `Netflix兒童體驗包含在您的會員資格裡，可讓家長控制觀賞內容，確保還蓻能在自己的小天地盡情享受老少咸宜的節目與電影。
            
            兒童使用者具備受PIN保護的家長控制選項，可讓您為家中兒童設定最適合的年齡分級內容，並封鎖您不想讓孩子們觀看的特定影片。`
        },

    ]

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <div className={Style.faqTitle}>
                <h1>常見問題解答</h1>
            </div>
            <div className={Style.faqContent}>
                {QA.map((item, index) => (
                    <div className={Style.faqItem} key={index}>
                        <button className={Style.faqQuestion} onClick={() => toggleFAQ(index)}>
                            {item.question}
                            <span className={Style.icon}>{activeIndex === index ? '✕' : '+'}</span>
                        </button>
                        <div className={`${Style.faqAnswer} ${activeIndex === index ? Style.active : ''}`}>
                            <p className={Style.faqAnswerText}>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FAQ;