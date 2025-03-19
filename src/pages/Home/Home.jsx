import Header from './components/Header/Header.jsx';
import Register from './components/Register/Register.jsx';
import HotNow from './components/HotNow/HotNow.jsx';
import Benifit from './components/Benifit/Benifit.jsx';


const Home = () => {
  return (
    <div>
      <Header />
      <Register />
      <HotNow />
      <Benifit />
      {/* <FAQ />
      <Footer /> */}
    </div>
  );
}

export default Home;