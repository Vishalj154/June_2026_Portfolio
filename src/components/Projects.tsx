import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const projects = [
  {
    title: 'College Hub',
    desc: 'A full-stack collaborative platform for college students to share notes, resources, and announcements. Features authentication, real-time notifications, and a dynamic dashboard.',
    tech: ['React.js','Node.js','Express.js','MySQL','JWT Auth'],
    github: 'https://github.com/Vishalj154/college-hub',
    live: '',
    emoji: '🎓',
    color: '#2563eb',
  },
  {
    title: 'AllocateAI',
    desc: 'AI-powered recruitment matching system that intelligently aligns candidate profiles with job descriptions using NLP algorithms, scoring relevance and generating match reports.',
    tech: ['Python','React.js','Flask','MySQL','NLP'],
    github: 'https://github.com/Vishalj154/allocate-ai',
    live: '',
    emoji: '🤖',
    color: '#7c3aed',
  },
  {
    title: 'Talencortex',
    desc: 'TalentCortex is an AI-powered resume analysis platform developed to help recruiters streamline candidate screening and selection. The system automatically extracts skills from resumes, analyzes candidate profiles, calculates ATS compatibility scores, and ranks applicants based on job requirements using Natural Language Processing (NLP) techniques',
    tech: ['Javascript','ML','AI','NLP','Chroma db'],
    github: 'https://github.com/Vishalj154/smart_resume_analyser',
    live: '',
    emoji: '📋',
    color: '#0891b2',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-title-wrapper">
        <div className="section-label"># projects</div>
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="section-subtitle">Real-world applications I built to solve actual problems.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',gap:'1.75rem'}}>
        {projects.map((p,i) => (
          <motion.div 
            key={p.title} 
            className="glass-card" 
            style={{display:'flex',flexDirection:'column',gap:'1.25rem'}} 
            initial={{opacity:0,y:30}} 
            whileInView={{opacity:1,y:0}} 
            viewport={{once:true}} 
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{duration:0.5,delay:i*0.12}}
          >
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div style={{fontSize:'2.5rem'}}>{p.emoji}</div>
              <div style={{display:'flex',gap:'0.5rem'}}>
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="btn-icon" style={{width:'36px',height:'36px'}} aria-label="GitHub"><GithubIcon size={17}/></a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="btn-icon" style={{width:'36px',height:'36px'}} aria-label="Live"><ExternalLink size={17}/></a>}
              </div>
            </div>
            <div>
              <h3 style={{fontSize:'1.3rem',fontWeight:700,marginBottom:'0.5rem'}}>{p.title}</h3>
              <p style={{fontSize:'0.92rem',color:'var(--text-muted)',lineHeight:1.7}}>{p.desc}</p>
            </div>
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem',marginTop:'auto'}}>
              {p.tech.map(t=><span key={t} className="badge">{t}</span>)}
            </div>
            <div style={{height:'3px',background:`linear-gradient(90deg,${p.color},transparent)`,borderRadius:'2px',marginTop:'0.25rem'}}/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
