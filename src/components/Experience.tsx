import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" style={{background:'rgba(37,99,235,0.03)'}}>
      <div className="section-title-wrapper">
        <div className="section-label"># experience</div>
        <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
        <p className="section-subtitle">Real-world roles that built my communication and leadership skills.</p>
      </div>
      <div className="timeline">
        <motion.div className="timeline-item" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <div className="timeline-marker"/>
          <div className="glass-card" style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'1rem'}}>
              <div>
                <h3 style={{fontSize:'1.25rem',fontWeight:700}}>Supervisor (Volunteer)</h3>
                <div style={{display:'flex',alignItems:'center',gap:'0.5rem',color:'var(--accent-primary)',marginTop:'0.3rem',fontWeight:500}}>
                  <Briefcase size={16}/> Dyanmandir Classes
                </div>
              </div>
              <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'0.4rem'}}>
                <span style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.88rem',color:'var(--text-muted)'}}><Calendar size={14}/>july 2024-march 2026 </span>
                <span className="badge">Part-time / Volunteer</span>
              </div>
            </div>
            <ul style={{display:'flex',flexDirection:'column',gap:'0.6rem',paddingLeft:'0.5rem'}}>
              {[
                'Supervised classroom of 30+ students during after-school sessions.',
                'Assisted in organizing academic schedules and tracking student progress.',
                'Developed strong leadership, communication, and time management skills.',
                'Coordinated between teachers and students for smooth operations.',
              ].map((p,i) => (
                <li key={i} style={{color:'var(--text-muted)',fontSize:'0.95rem',display:'flex',gap:'0.6rem',alignItems:'flex-start',listStyle:'none'}}>
                  <span style={{color:'var(--accent-primary)',marginTop:'2px'}}>▸</span> {p}
                </li>
              ))}
            </ul>
            <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
              {['Leadership','Communication','Organization','Team Coordination'].map(t=><span key={t} className="badge">{t}</span>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
