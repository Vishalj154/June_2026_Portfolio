import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const goto = (id: string) => {
    const el = document.getElementById(id);
    if(el) window.scrollTo({top:el.getBoundingClientRect().top+window.pageYOffset-75,behavior:'smooth'});
  };
  return (
    <footer style={{background:'rgba(37,99,235,0.06)',borderTop:'1px solid rgba(37,99,235,0.12)',padding:'3rem 2rem 2rem'}}>
      <div style={{maxWidth:'1180px',margin:'0 auto',display:'flex',flexDirection:'column',gap:'2rem',alignItems:'center',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-heading)',fontSize:'1.6rem',fontWeight:800,color:'var(--accent-primary)',cursor:'pointer'}} onClick={()=>goto('home')}>
          &lt;VJ /&gt;
        </div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'1.5rem',justifyContent:'center'}}>
          {['home','about','skills','experience','projects','certifications','education','achievements','contact'].map(id=>(
            <button key={id} onClick={()=>goto(id)} style={{background:'none',border:'none',color:'var(--text-muted)',fontSize:'0.88rem',cursor:'pointer',textTransform:'capitalize',transition:'var(--transition-fast)'}}
              onMouseEnter={e=>(e.currentTarget.style.color='var(--accent-primary)')}
              onMouseLeave={e=>(e.currentTarget.style.color='var(--text-muted)')}>
              {id}
            </button>
          ))}
        </div>
        <div style={{display:'flex',gap:'0.75rem'}}>
          <a href="https://github.com/Vishalj154" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub"><GithubIcon size={18}/></a>
          <a href="https://www.linkedin.com/in/vishal-jankar-b55948347/" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn"><LinkedinIcon size={18}/></a>
          <a href="mailto:vishaljankar2534@gmail.com" className="btn-icon" aria-label="Email"><Mail size={18}/></a>
        </div>
        <p style={{fontSize:'0.85rem',color:'var(--text-dark)',display:'flex',alignItems:'center',gap:'0.4rem'}}>
          Made with ❤️ by <strong style={{color:'var(--accent-primary)'}}>Vishal Jankar</strong> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
