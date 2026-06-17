import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import './Navbar.css';

const navItems = [
  { label:'Home', id:'home' },
  { label:'About', id:'about' },
  { label:'Skills', id:'skills' },
  { label:'Experience', id:'experience' },
  { label:'Projects', id:'projects' },
  { label:'Certifications', id:'certifications' },
  { label:'Education', id:'education' },
  { label:'Achievements', id:'achievements' },
  { label:'Contact', id:'contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if(e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    navItems.forEach(item => { const el = document.getElementById(item.id); if(el) obs.observe(el); });
    return () => navItems.forEach(item => { const el = document.getElementById(item.id); if(el) obs.unobserve(el); });
  }, []);

  const goto = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if(el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 75, behavior:'smooth' });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <div className="nav-logo" onClick={() => goto('home')}>
            <span className="logo-bracket">&lt;</span>VJ<span className="logo-bracket">/&gt;</span>
          </div>
          <nav className="nav-links-desktop">
            {navItems.map(item => (
              <button key={item.id} onClick={() => goto(item.id)} className={`nav-link ${active===item.id?'active':''}`}>
                {item.label}
                {active===item.id && <motion.span layoutId="pill" className="nav-pill" transition={{type:'spring',stiffness:380,damping:30}} />}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <a href="/Vishal_Jankar_Resume.pdf?v=20260617" download className="btn btn-primary nav-resume-btn">
              <Download size={15}/> Resume
            </a>
            <button className="hamburger" onClick={() => setOpen(!open)} aria-label="menu">
              {open ? <X size={22}/> : <Menu size={22}/>}
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => goto(item.id)} className={`mobile-link ${active===item.id?'active':''}`}>{item.label}</button>
            ))}
            <div style={{display:'flex',gap:'0.75rem',marginTop:'0.5rem'}}>
              <a href="https://github.com/Vishalj154" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub"><GithubIcon size={18}/></a>
              <a href="https://linkedin.com/in/vishal-jankar" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn"><LinkedinIcon size={18}/></a>
            </div>
            <a href="/Vishal_Jankar_Resume.pdf?v=20260617" download className="btn btn-primary" style={{width:'100%',marginTop:'0.25rem'}}><Download size={15}/>Download Resume</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
