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
      <div className={styles.homeTopPart}>
      <Header />
      <Register />
      </div>
      <div className={styles.homeLowerPart}>
      <HotNow />
      <Benifit />
      <FAQ />
      <Footer />
      </div>
    </div>
  );
}

export default Home;