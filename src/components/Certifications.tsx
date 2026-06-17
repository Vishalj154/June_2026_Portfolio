import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import certWebdev from '../assets/certWebdev.jpg';
import certPython from '../assets/certPython.jpg';
import certSharktank from '../assets/cert_sharktank.jpg';

const certs = [
  { title:'Ultimate Web Development Bootcamp', issuer:'CodeWithHarry', year:'2024', img:certWebdev, link:'#', color:'#2563eb' },
  { title:'Complete Python Bootcamp 2026', issuer:'CodeWithHarry', year:'2025', img:certPython, link:'#', color:'#7c3aed' },
  { title:'ACM Shark Tank Finalist', issuer:'ACM FCRIT', year:'2025', img:certSharktank, link:'#', color:'#0891b2' },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{background:'rgba(37,99,235,0.03)'}}>
      <div className="section-title-wrapper">
        <div className="section-label"># certifications</div>
        <h2 className="section-title">My <span className="gradient-text">Certifications</span></h2>
        <p className="section-subtitle">Validated skills through professional courses and competitions.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))',gap:'1.75rem'}}>
        {certs.map((c,i) => (
          <motion.div key={c.title} className="glass-card" style={{display:'flex',flexDirection:'column',gap:'1rem',padding:'0 0 1.5rem'}} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.12}}>
            <div style={{height:'200px',overflow:'hidden',borderRadius:'16px 16px 0 0',flexShrink:0}}>
              <img src={c.img} alt={c.title} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.4s ease'}}
                onMouseEnter={e=>(e.currentTarget.style.transform='scale(1.06)')}
                onMouseLeave={e=>(e.currentTarget.style.transform='scale(1)')}/>
            </div>
            <div style={{padding:'0 1.5rem',display:'flex',flexDirection:'column',gap:'0.6rem'}}>
              <h3 style={{fontSize:'1.05rem',fontWeight:700,lineHeight:1.4}}>{c.title}</h3>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontSize:'0.85rem',color:'var(--accent-primary)',fontWeight:600}}>{c.issuer}</span>
                <span className="badge">{c.year}</span>
              </div>
              <a href={c.link} target="_blank" rel="noreferrer" className="btn btn-secondary" style={{fontSize:'0.82rem',padding:'0.4rem 1rem'}}>
                <ExternalLink size={14}/> View Certificate
              </a>
            </div>
            <div style={{height:'3px',background:`linear-gradient(90deg,${c.color},transparent)`,borderRadius:'0 0 2px 2px',margin:'0 1.5rem'}}/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
