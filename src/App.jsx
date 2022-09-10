import './scss/main.scss';
import Home from './components/Home'
import Statics from './components/Statics';
import About from './components/About';
import Video from './components/Video';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Questions from './components/Questions';
import DailyEmail from './components/DailyEmail';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Home/>
      <Statics/>
      <About/>
      <Video/>
      <Services/>
      <Reviews/>
      <Questions/>
      <DailyEmail/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
