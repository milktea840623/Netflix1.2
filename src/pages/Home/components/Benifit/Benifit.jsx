import React from 'react';
import Style from './Benifit.module.css';

const benefits =[
    {
        title: '在電視上觀⁠賞',
        description: '在智慧型電視、PlayStation、Xbox、Chromecast、Apple TV、藍光播放器等多種裝置上觀賞。',
        image: 'image/bell.png',
        alt: '在電視上觀賞'
    },
    {
        title: '下載節目供離線觀賞',
        description: '輕鬆儲存您最喜歡的影片，讓您時時都能盡情觀賞。',
        image: 'image/search.png',
        alt: '下載節目供離線觀賞'
    },
    {
        title: '隨時隨地都能觀賞',
        description: '在手機、平板電腦、筆記型電腦和電視上盡情串流電影與節目。',
        image: 'image/sound.png',
        alt: '隨時隨地都能觀賞'
    },
    {
        title: '建立兒童專用的使用者',
        description: '讓孩子們和心愛的角色在他們專屬的小天地一同冒險。擁有會員資格即可免費使用。',
        image: 'image/down.png',
        alt: '建立兒童專用的使用者'
    }
    
];


const Benifit = () => {
    return (
        <div className={Style.benifit}>
            <div className={Style.benifitTitle}>
                <h1>好處說不完</h1>
            </div>
            <div className={Style.benifitContent}>
                {benefits.map((benefit, index) => (
                    <div className={Style.benifitItem} key={index}>
                        <h2 className={Style.benifitItemTitle}>{benefit.title}</h2>
                        <p className={Style.benifitItemDescription}>{benefit.description}</p>
                        <img src={benefit.image} alt={benefit.alt} className={Style.benifitItemImage} />
                    </div>
                ))}

                
            </div>
        </div>
    )
}   

export default Benifit;