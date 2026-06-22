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

interface Skill {
  n: string;
  color: string;
  border: string;
}

interface Category {
  title: string;
  emoji: string;
  skills: Skill[];
}

const categories: Category[] = [
  { 
    title: 'Languages', 
    emoji: '💻', 
    skills: [
      { n: 'Java', color: 'rgba(231, 111, 81, 0.08)', border: 'rgba(231, 111, 81, 0.35)' },
      { n: 'Python', color: 'rgba(55, 118, 171, 0.08)', border: 'rgba(55, 118, 171, 0.35)' },
      { n: 'C Language', color: 'rgba(0, 89, 156, 0.08)', border: 'rgba(0, 89, 156, 0.35)' },
      { n: 'JavaScript', color: 'rgba(247, 223, 30, 0.08)', border: 'rgba(247, 223, 30, 0.35)' }
    ] 
  },
  { 
    title: 'Frontend', 
    emoji: '🎨', 
    skills: [
      { n: 'React.js', color: 'rgba(97, 218, 251, 0.08)', border: 'rgba(97, 218, 251, 0.35)' },
      { n: 'HTML & CSS', color: 'rgba(227, 79, 38, 0.08)', border: 'rgba(227, 79, 38, 0.35)' },
      { n: 'Framer Motion', color: 'rgba(240, 31, 122, 0.08)', border: 'rgba(240, 31, 122, 0.35)' },
      { n: 'Responsive CSS', color: 'rgba(59, 130, 246, 0.08)', border: 'rgba(59, 130, 246, 0.35)' }
    ] 
  },
  { 
    title: 'Backend & DB', 
    emoji: '🗄️', 
    skills: [
      { n: 'Node.js', color: 'rgba(51, 153, 51, 0.08)', border: 'rgba(51, 153, 51, 0.35)' },
      { n: 'Express.js', color: 'rgba(15, 23, 42, 0.08)', border: 'rgba(15, 23, 42, 0.35)' },
      { n: 'MySQL', color: 'rgba(0, 117, 143, 0.08)', border: 'rgba(0, 117, 143, 0.35)' },
      { n: 'REST APIs', color: 'rgba(16, 185, 129, 0.08)', border: 'rgba(16, 185, 129, 0.35)' }
    ] 
  },
  { 
    title: 'Tools', 
    emoji: '🛠️', 
    skills: [
      { n: 'Git & GitHub', color: 'rgba(240, 80, 50, 0.08)', border: 'rgba(240, 80, 50, 0.35)' },
      { n: 'Postman', color: 'rgba(255, 108, 55, 0.08)', border: 'rgba(255, 108, 55, 0.35)' },
      { n: 'npm / Vite', color: 'rgba(189, 52, 254, 0.08)', border: 'rgba(189, 52, 254, 0.35)' },
      { n: 'Firebase', color: 'rgba(245, 130, 32, 0.08)', border: 'rgba(245, 130, 32, 0.35)' }
    ] 
  },
];

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'java': return <JavaIcon size={20} />;
    case 'python': return <PythonIcon size={20} />;
    case 'c language': return <CIcon size={20} />;
    case 'javascript': return <JavaScriptIcon size={20} />;
    case 'react.js': return <ReactIcon size={20} />;
    case 'html & css': return <HtmlCssIcon size={20} />;
    case 'framer motion': return <FramerMotionIcon size={20} />;
    case 'responsive css': return <ResponsiveIcon size={20} />;
    case 'node.js': return <NodejsIcon size={20} />;
    case 'express.js': return <ExpressjsIcon size={20} />;
    case 'mysql': return <MysqlIcon size={20} />;
    case 'rest apis': return <ApiIcon size={20} />;
    case 'git & github': return <GitIcon size={20} />;
    case 'postman': return <PostmanIcon size={20} />;
    case 'npm / vite': return <ViteIcon size={20} />;
    case 'firebase': return <FirebaseIcon size={20} />;
    default: return null;
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      type: 'spring' as const,
      stiffness: 300,
      damping: 20
    }
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
            <motion.div 
              className="skill-items"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {cat.skills.map((s) => (
                <motion.div
                  key={s.n}
                  className="skill-pill"
                  style={{
                    '--hover-bg': s.color,
                    '--hover-border': s.border,
                  } as React.CSSProperties}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="skill-pill-icon">{getIcon(s.n)}</span>
                  <span className="skill-pill-name">{s.n}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
