import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Mail, Phone } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import profileImg from '../assets/profile.jpg';
import './Hero.css';

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const up = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const words = ['Full-Stack Developer', 'Computer Engineer', 'Problem Solver'];

function TypingEffect() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setBlink((prev) => !prev);
    }, 550);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 45 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <span style={{ display: 'inline-block', minWidth: '1px' }}>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0, color: 'var(--accent-primary)', marginLeft: '1px', fontWeight: 'bold' }}>|</span>
    </span>
  );
}

export default function Hero() {
  const goto = (id: string) => {
    const el = document.getElementById(id);
    if(el) window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-75,behavior:'smooth'});
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* LEFT */}
        <motion.div className="hero-left" variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={up} className="hero-tag">
            <span className="dot"/> Available for Internships &amp; Full-time
          </motion.div>
          <motion.h1 variants={up} className="hero-name">
            Hi, I'm<br/><span className="gradient-text">Vishal Jankar</span>
          </motion.h1>
          <motion.h2 variants={up} className="hero-role" style={{ minHeight: '2.2rem', display: 'flex', alignItems: 'center' }}>
            <TypingEffect />
          </motion.h2>
          <motion.p variants={up} className="hero-desc">
            CS undergrad at FCRIT Vashi (9.07 CGPA) building full-stack applications with 
            React, Node.js, Express &amp; MySQL. Passionate about clean code, user experience, 
            and solving real-world problems.
          </motion.p>
          <motion.div variants={up} className="hero-badges">
            {['React.js','Node.js','Express.js','MySQL','Python','Java','TypeScript','JavaScript'].map(t=>(
              <span key={t} className="badge">{t}</span>
            ))}
          </motion.div>
          <motion.div variants={up} className="hero-ctas">
            <button onClick={()=>goto('projects')} className="btn btn-primary">View Projects <ArrowRight size={16}/></button>
            <a href="/Vishal_Jankar_Resume.pdf" download="Vishal_Jankar_Resume.pdf" className="btn btn-secondary"><FileText size={16}/> Download CV</a>
          </motion.div>
          <motion.div variants={up} className="hero-socials">
            <a href="https://github.com/Vishalj154" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub"><GithubIcon size={20}/></a>
            <a href="https://www.linkedin.com/in/vishal-jankar-b55948347/" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn"><LinkedinIcon size={20}/></a>
            <a href="mailto:vishaljankar2534@gmail.com" className="btn-icon" aria-label="Email"><Mail size={20}/></a>
            <a href="tel:+919082752201" className="btn-icon" aria-label="Phone"><Phone size={20}/></a>
          </motion.div>
        </motion.div>

        {/* RIGHT - PHOTO */}
        <motion.div className="hero-right" initial={{opacity:0,scale:0.88}} animate={{opacity:1,scale:1}} transition={{duration:0.8,delay:0.3}}>
          <div className="profile-container">
            <div className="ring ring-outer"/>
            <div className="ring ring-inner"/>
            <div className="photo-frame">
              <img src={profileImg} alt="Vishal Jankar" className="photo-img"/>
            </div>
            <div className="float-tag ft-1">⚛ React</div>
            <div className="float-tag ft-2">🟢 Node</div>
            <div className="float-tag ft-3">🗃 MySQL</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
