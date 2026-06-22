import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="app-wrapper">
      {/* Background Particles Canvas */}
      <BackgroundParticles />

      {/* Background Orbs */}
      <div className="orb" style={{width:'500px',height:'500px',background:'rgba(37,99,235,0.1)',top:'-100px',right:'-100px'}}/>
      <div className="orb" style={{width:'400px',height:'400px',background:'rgba(124,58,237,0.08)',top:'40%',left:'-150px'}}/>
      <div className="orb" style={{width:'350px',height:'350px',background:'rgba(8,145,178,0.08)',bottom:'10%',right:'5%'}}/>

      <Navbar />
      <main style={{position:'relative',zIndex:1}}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
