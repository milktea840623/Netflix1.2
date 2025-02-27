import style from './Best.module.css'
import BestSlider from './BestSlider.jsx'

const Best = ({ title, exploreButton, images }) => {
  return (
    <div className={style.dailyBest}>
      <div className={style.dailyBestExpBlock}>
        <a href="#recommend" className={style.recommendation}>
          <div className={style.dailyBestComBlock}>{title}</div>
          <div className={style.rightArrowBlock}>
            <div className={style.exploreButton}>{exploreButton}</div>
            <div className={style.rightArrow}></div>
          </div>
        </a>
      </div>
      <div className={style.dailyBestMovieList}>
        <BestSlider images = { images} />
      </div>
    </div>
  )
}

export default Best;
