import Header from './components/Header/Header.jsx';
import Register from './components/Register/Register.jsx';
import HotNow from './components/HotNow/HotNow.jsx';
import Benifit from './components/Benifit/Benifit.jsx';
import styles from './Home.module.css';
import FAQ from './components/FAQ/FAQ.jsx';
import Footer from './components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div>
      <div className={styles.topPart}>
        <Header />
      </div>
      <div className={styles.middlePart}>
        <Register />
        <HotNow />
        <Benifit />
        <FAQ />
      </div>
      <div className={styles.lowerPart}>
        <Footer />
      </div>
    </div>
  );
}

export default Home;