import MovieSlider from './components/MovieSlider';
import Style from './HotNow.module.css';

const HotNow = () => {
    return (
        <div className={Style.hotNow}>
            <div className={Style.hotNowTittle}>
                <h1>現正熱播</h1>
            </div>
            <div className={Style.hotNowContent}>
                <div className={Style.hotNowList}>
                    <MovieSlider/>
                </div>
            </div>
        </div>
    )
}

export default HotNow;