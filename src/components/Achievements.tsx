import { motion } from 'framer-motion';
import { Trophy, Users, Star, Zap } from 'lucide-react';

const achievements = [
  { icon:<Trophy size={28}/>, title:'ACM Shark Tank Finalist', desc:'Selected as a finalist in ACM FCRIT Shark Tank competition, pitching an innovative tech product to a panel of judges.', color:'#f59e0b' },
  { icon:<Users size={28}/>, title:'Team Lead – College Hub', desc:'Led a team of developers to build College Hub, managing planning, task distribution, and full-stack implementation.', color:'#2563eb' },
  { icon:<Star size={28}/>, title:'9.07 CGPA – FCRIT Vashi', desc:'Maintaining a strong academic record of 9.07/10 CGPA in B.Tech Computer Science at FCRIT Vashi.', color:'#7c3aed' },
  { icon:<Zap size={28}/>, title:'AllocateAI – AI Hackathon Project', desc:'Developed AllocateAI, an AI-driven recruitment matcher that intelligently maps candidate profiles to job requirements.', color:'#0891b2' },
];

export default function Achievements() {
  return (
    <section id="achievements" style={{background:'rgba(37,99,235,0.03)'}}>
      <div className="section-title-wrapper">
        <div className="section-label"># achievements</div>
        <h2 className="section-title">Key <span className="gradient-text">Achievements</span></h2>
        <p className="section-subtitle">Milestones and recognitions that define my journey.</p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))',gap:'1.5rem'}}>
        {achievements.map((a,i) => (
          <motion.div key={a.title} className="glass-card" style={{display:'flex',flexDirection:'column',gap:'1rem'}} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}}>
            <div style={{width:'54px',height:'54px',borderRadius:'14px',background:`${a.color}15`,border:`1px solid ${a.color}25`,display:'flex',alignItems:'center',justifyContent:'center',color:a.color}}>
              {a.icon}
            </div>
            <h3 style={{fontSize:'1.05rem',fontWeight:700}}>{a.title}</h3>
            <p style={{fontSize:'0.9rem',color:'var(--text-muted)',lineHeight:1.65}}>{a.desc}</p>
            <div style={{height:'2px',background:`linear-gradient(90deg,${a.color},transparent)`,borderRadius:'2px'}}/>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
