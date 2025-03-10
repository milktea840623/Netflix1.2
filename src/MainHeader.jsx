import Style from './MainHeader.module.css';
import {useState,useEffect} from 'react'


const MainHeader = () =>{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const HandleScroll =() =>{
            console.log(window.scrollY)
            if(window.scrollY > 50){
                setIsScrolled(true);
            }else{
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', HandleScroll);
        return() =>{
            window.removeEventListener('scroll',HandleScroll);
        };
    },[]);
    return(
        <header className={`${Style.mainHeader} ${isScrolled ? Style.scrolled : ''}`}>
            <div className={Style.logo}>
                <a href="#home" className={Style.logoText}>Netflix</a>
            </div>
            <nav className={Style.navigation}>
                <ul className={Style.navigationList}>
                    <li><a href="#home">首頁</a></li>
                    <li><a href="#anime">動漫</a></li>
                    <li><a href="#movie">電影</a></li>
                    <li><a href="#tv">電視劇</a></li>
                    <li><a href="#mylist">我的片單</a></li>
                    <li><a href="#news">最新消息</a></li>
                </ul>
            </nav>
            <div className={Style.userIconBlock}>
                <a href="#search">
                    <img src="/image/search.png" alt="搜尋" className={Style.iconSearch}/>
                </a>
                <a href="#notify">
                    <img src="/image/bell.png" alt="通知" className={Style.iconNotify}/>
                </a>
                <a href="#profile">
                    <img src="/image/user.png" alt="用戶" className={Style.iconUser}/>
                </a>
            </div>
        </header>
    )
}
export default MainHeader;