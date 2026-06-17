import { motion } from 'framer-motion';
import './Skills.css';

const categories = [
  { title:'Languages', emoji:'💻', skills:[{n:'Java',l:85},{n:'Python',l:80},{n:'C Language',l:75},{n:'JavaScript',l:88}] },
  { title:'Frontend', emoji:'🎨', skills:[{n:'React.js',l:82},{n:'HTML & CSS',l:92},{n:'Framer Motion',l:70},{n:'Responsive CSS',l:88}] },
  { title:'Backend & DB', emoji:'🗄️', skills:[{n:'Node.js',l:78},{n:'Express.js',l:78},{n:'MySQL',l:82},{n:'REST APIs',l:80}] },
  { title:'Tools', emoji:'🛠️', skills:[{n:'Git & GitHub',l:88},{n:'Postman',l:80},{n:'npm / Vite',l:85},{n:'Firebase',l:65}] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-title-wrapper">
        <div className="section-label"># technical-skills</div>
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Technologies I work with to build robust, scalable applications.</p>
      </div>

      <div className="skills-grid">
        {categories.map((cat,ci) => (
          <motion.div key={cat.title} className="glass-card skill-card" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5,delay:ci*0.1}}>
            <div className="skill-cat-header">
              <span className="skill-cat-emoji">{cat.emoji}</span>
              <h3 className="skill-cat-title">{cat.title}</h3>
            </div>
            <div className="skill-items">
              {cat.skills.map(s => (
                <div key={s.n} className="skill-row">
                  <div className="skill-row-info">
                    <span className="skill-name">{s.n}</span>
                    <span className="skill-pct">{s.l}%</span>
                  </div>
                  <div className="prog-track">
                    <motion.div className="prog-fill" initial={{width:0}} whileInView={{width:`${s.l}%`}} viewport={{once:true}} transition={{duration:1,delay:0.2,ease:'easeOut'}}/>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
