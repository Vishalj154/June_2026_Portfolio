import { motion } from 'framer-motion';
import {
  JavaIcon,
  PythonIcon,
  CIcon,
  JavaScriptIcon,
  ReactIcon,
  HtmlCssIcon,
  FramerMotionIcon,
  ResponsiveIcon,
  NodejsIcon,
  ExpressjsIcon,
  MysqlIcon,
  ApiIcon,
  GitIcon,
  PostmanIcon,
  ViteIcon,
  FirebaseIcon
} from './TechIcons';
import './Skills.css';

const categories = [
  { title:'Languages', emoji:'💻', skills:[{n:'Java',l:85},{n:'Python',l:80},{n:'C Language',l:75},{n:'JavaScript',l:88}] },
  { title:'Frontend', emoji:'🎨', skills:[{n:'React.js',l:82},{n:'HTML & CSS',l:92},{n:'Framer Motion',l:70},{n:'Responsive CSS',l:88}] },
  { title:'Backend & DB', emoji:'🗄️', skills:[{n:'Node.js',l:78},{n:'Express.js',l:78},{n:'MySQL',l:82},{n:'REST APIs',l:80}] },
  { title:'Tools', emoji:'🛠️', skills:[{n:'Git & GitHub',l:88},{n:'Postman',l:80},{n:'npm / Vite',l:85},{n:'Firebase',l:65}] },
];

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'java': return <JavaIcon size={18} />;
    case 'python': return <PythonIcon size={18} />;
    case 'c language': return <CIcon size={18} />;
    case 'javascript': return <JavaScriptIcon size={18} />;
    case 'react.js': return <ReactIcon size={18} />;
    case 'html & css': return <HtmlCssIcon size={18} />;
    case 'framer motion': return <FramerMotionIcon size={18} />;
    case 'responsive css': return <ResponsiveIcon size={18} />;
    case 'node.js': return <NodejsIcon size={18} />;
    case 'express.js': return <ExpressjsIcon size={18} />;
    case 'mysql': return <MysqlIcon size={18} />;
    case 'rest apis': return <ApiIcon size={18} />;
    case 'git & github': return <GitIcon size={18} />;
    case 'postman': return <PostmanIcon size={18} />;
    case 'npm / vite': return <ViteIcon size={18} />;
    case 'firebase': return <FirebaseIcon size={18} />;
    default: return null;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-title-wrapper">
        <div className="section-label"># technical-skills</div>
        <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
        <p className="section-subtitle">Technologies I work with to build robust, scalable applications.</p>
      </div>

      <div className="skills-grid">
        {categories.map((cat, ci) => (
          <motion.div 
            key={cat.title} 
            className="glass-card skill-card" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5, delay: ci * 0.1 }}
          >
            <div className="skill-cat-header">
              <span className="skill-cat-emoji">{cat.emoji}</span>
              <h3 className="skill-cat-title">{cat.title}</h3>
            </div>
            <div className="skill-items">
              {cat.skills.map((s, si) => (
                <motion.div
                  key={s.n}
                  className="skill-pill"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: (ci * 0.1) + (si * 0.05) 
                  }}
                >
                  <span className="skill-pill-icon">{getIcon(s.n)}</span>
                  <span className="skill-pill-name">{s.n}</span>
                  <span className="skill-pill-badge">{s.l}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
