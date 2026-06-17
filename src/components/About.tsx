import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code2, Zap } from 'lucide-react';
import aboutImg from '../assets/profile_about.jpg';
import './About.css';

const facts = [
  { icon:<MapPin size={22}/>, title:'Location', value:'Mumbai, Maharashtra', sub:'Open to relocation' },
  { icon:<GraduationCap size={22}/>, title:'Education', value:'B.Tech CS @ FCRIT', sub:'CGPA: 9.07 / 10' },
  { icon:<Code2 size={22}/>, title:'Projects', value:'2+ Full-Scale Apps', sub:'Hackathons & Teams' },
  { icon:<Zap size={22}/>, title:'Technologies', value:'10+ Tools & Langs', sub:'Full-stack developer' },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-title-wrapper">
        <div className="section-label"># about-me</div>
        <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
        <p className="section-subtitle">A passionate builder who loves turning ideas into functional, beautiful software.</p>
      </div>

      <div className="about-grid">
        <motion.div className="about-img-col" initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <div className="about-img-wrapper">
            <div className="about-img-glow"/>
            <div className="about-img-frame">
              <img src={aboutImg} alt="Vishal Jankar" className="about-img"/>
            </div>
            <div className="about-img-bg"/>
          </div>
        </motion.div>

        <motion.div className="about-content" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7}}>
          <h3 className="about-heading">Full-Stack Dev & Problem Solver</h3>
          <p className="about-text">
            I'm a Computer Engineering student at <strong>Fr. C. Rodrigues Institute of Technology, Vashi</strong> (2024–2028). 
            With a strong CGPA of 9.07, I focus on building end-to-end web solutions that are both 
            functional and visually impactful.
          </p>
          <p className="about-text">
            My experience spans full-stack development with React, Node.js, Express, and MySQL. 
            I've worked on collaborative platforms, AI-driven tools, and academic hackathons — 
            always aiming for clean architecture and great user experience.
          </p>
          <div className="about-interests">
            <h4 className="int-title">Core Strengths</h4>
            <div className="int-grid">
              {['Full-Stack Development','Database Design','REST APIs','Team Collaboration','AI & Automation','Problem Solving'].map(s=>(
                <span key={s} className="int-tag">{s}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="facts-grid">
        {facts.map((f,i) => (
          <motion.div key={f.title} className="glass-card fact-card" initial={{y:30,opacity:0}} whileInView={{y:0,opacity:1}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}}>
            <div className="fact-icon">{f.icon}</div>
            <h4 className="fact-title">{f.title}</h4>
            <p className="fact-value">{f.value}</p>
            <p className="fact-sub">{f.sub}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
