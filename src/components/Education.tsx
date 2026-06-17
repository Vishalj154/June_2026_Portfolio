import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  return (
    <section id="education">
      <div className="section-title-wrapper">
        <div className="section-label"># education</div>
        <h2 className="section-title">My <span className="gradient-text">Education</span></h2>
        <p className="section-subtitle">Strong academic foundation in Computer Science and Engineering.</p>
      </div>
      <div className="timeline">
        {[
          {
            degree:'Bachelor of Technology - Computer Science',
            school:'Fr. C. Rodrigues Institute of Technology (FCRIT), Vashi',
            duration:'2024 – 2028',
            grade:'CGPA: 9.07 / 10',
            desc:'Pursuing B.Tech with focus on full-stack development, data structures, databases, and software engineering principles.',
            badges:['Full-Stack Dev','DBMS','DSA','OS','Networking'],
          },
          {
            degree:'Higher Secondary Certificate (HSC)',
            school:'Maharashtra State Board',
            duration:'2022 – 2024',
            grade:'87.73%',
            desc:'Completed HSC with strong performance in Mathematics, Physics, and Computer Science.',
            badges:['Physics','Chemistry','Mathematics'],
          },
          {
            degree:'Secondary School Certificate (SSC)',
            school:'Maharashtra State Board',
            duration:'Completed 2022',
            grade:'95.60%',
            desc:'Achieved 95.60% in board examinations. Active in school tech events and extracurriculars.',
            badges:['Math','Science','English','Social Science','Hindi','Marathi'],
          },
        ].map((edu,i) => (
          <motion.div key={i} className="timeline-item" initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.6,delay:i*0.1}}>
            <div className="timeline-marker"/>
            <div className="glass-card" style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:'0.75rem'}}>
                <div>
                  <div style={{display:'flex',alignItems:'center',gap:'0.5rem',color:'var(--accent-primary)',marginBottom:'0.4rem'}}>
                    <GraduationCap size={18}/> <span style={{fontWeight:600,fontSize:'0.9rem'}}>{edu.school}</span>
                  </div>
                  <h3 style={{fontSize:'1.15rem',fontWeight:700}}>{edu.degree}</h3>
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'0.4rem'}}>
                  <span style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.85rem',color:'var(--text-muted)'}}><Calendar size={14}/>{edu.duration}</span>
                  <span style={{display:'flex',alignItems:'center',gap:'0.4rem',fontSize:'0.88rem',color:'#16a34a',fontWeight:600}}><Award size={14}/>{edu.grade}</span>
                </div>
              </div>
              <p style={{color:'var(--text-muted)',fontSize:'0.92rem',lineHeight:1.6}}>{edu.desc}</p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
                {edu.badges.map(b=><span key={b} className="badge">{b}</span>)}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
