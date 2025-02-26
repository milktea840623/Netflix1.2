import style from './Best.module.css'
import BestSlider from './BestSlider.jsx'

const Best = () => {
    return (
        <div className={style.dailyBest}>
            <div className={style.dailyBestExpBlock}>
                <a href="#recommend" className={style.recommendation}>
                    <div className={style.dailyBestComBlock}>本日最佳推薦</div>
                    <div className={style.rightArrowBlock}>
                        <div className={style.exploreButton}>探索全部</div>
                        <div className={style.rightArrow}></div>
                    </div>
                </a>
            </div>            
            <div className={style.dailyBestMovieList}>
                <BestSlider />
            </div>
        </div>
    )
}

export default Best;
