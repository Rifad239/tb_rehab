import './App.css';
import { useRef } from 'react';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Service from './components/Service';
import Isiservice from './components/Isiservice';
import TextService from './components/TextService';
import About from './components/About';
import DescAbout from './components/DescAbout';
import VMSAbout from './components/VMSAbout';
import ContactUs from './components/ContactUs';
import "./style/landingPage.css";

function App() {
  const serviceRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* intro section */}
      <div className="myBG">
        <NavigationBar
          scrollToSection={scrollToSection}
          serviceRef={serviceRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
        />
        <Intro/>
      </div>
      {/* end of intro */}

      {/* service section */}
      <div className="serviceBG" ref={serviceRef}>
        <Service/>
        <Isiservice/>
        <TextService/>
      </div>
      {/* end of service */}

      {/* about section */}
      <div className="aboutBG" ref={aboutRef}>
        <About/>
        <DescAbout/>
        <VMSAbout/>
      </div>
      {/* end of about */}

      {/* contact section */}
      <div className="contactBG" ref={contactRef}>
        <ContactUs />
      </div>
      {/* end of contact */}
    </div>
  );
}

export default App;