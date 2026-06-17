import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:vishaljankar2534@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailtoLink;
    setSent(true);
    setTimeout(()=>setSent(false),3000);
  };

  const info = [
    { icon:<Mail size={20}/>, label:'Email', val:'vishaljankar2534@gmail.com', href:'mailto:vishaljankar2534@gmail.com' },
    { icon:<Phone size={20}/>, label:'Phone', val:'+91 9082752201', href:'tel:+919082752201' },
    { icon:<MapPin size={20}/>, label:'Location', val:'Mumbai, Maharashtra', href:'#' },
  ];

  return (
    <section id="contact">
      <div className="section-title-wrapper">
        <div className="section-label"># contact</div>
        <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
        <p className="section-subtitle">Have a project or opportunity? I'd love to hear from you.</p>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:'2.5rem',alignItems:'start'}}>
        {/* Contact Info */}
        <div style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          <div className="glass-card" style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
              <MessageCircle size={24} style={{color:'var(--accent-primary)'}}/>
              <h3 style={{fontSize:'1.2rem',fontWeight:700}}>Let's Connect</h3>
            </div>
            <p style={{color:'var(--text-muted)',lineHeight:1.7,fontSize:'0.95rem'}}>
              I'm currently open to internship and full-time opportunities. 
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            {info.map(item=>(
              <a key={item.label} href={item.href}
                style={{display:'flex',alignItems:'center',gap:'1rem',padding:'0.75rem 1rem',background:'rgba(37,99,235,0.05)',borderRadius:'10px',border:'1px solid rgba(37,99,235,0.12)',transition:'var(--transition-fast)',color:'inherit',textDecoration:'none'}}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background='rgba(37,99,235,0.1)';(e.currentTarget as HTMLElement).style.borderColor='rgba(37,99,235,0.3)';}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background='rgba(37,99,235,0.05)';(e.currentTarget as HTMLElement).style.borderColor='rgba(37,99,235,0.12)';}}>
                <div style={{width:'40px',height:'40px',borderRadius:'10px',background:'rgba(37,99,235,0.1)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--accent-primary)',flexShrink:0}}>{item.icon}</div>
                <div>
                  <div style={{fontSize:'0.78rem',color:'var(--text-dark)',fontWeight:500}}>{item.label}</div>
                  <div style={{fontSize:'0.9rem',fontWeight:600}}>{item.val}</div>
                </div>
              </a>
            ))}
            <div style={{display:'flex',gap:'0.75rem',paddingTop:'0.5rem'}}>
              <a href="https://github.com/Vishalj154" target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub"><GithubIcon size={20}/></a>
              <a href="https://linkedin.com/in/vishal-jankar" target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn"><LinkedinIcon size={20}/></a>
              <a href="mailto:vishaljankar2534@gmail.com" className="btn-icon" aria-label="Email"><Mail size={20}/></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div className="glass-card" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
          <h3 style={{fontSize:'1.2rem',fontWeight:700,marginBottom:'1.5rem'}}>Send Me a Message</h3>
          <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'1.25rem'}}>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1rem'}}>
              <div>
                <label className="form-label">Name</label>
                <input className="form-input" type="text" placeholder="Your Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/>
              </div>
              <div>
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="you@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/>
              </div>
            </div>
            <div>
              <label className="form-label">Subject</label>
              <input className="form-input" type="text" placeholder="What's this about?" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/>
            </div>
            <div>
              <label className="form-label">Message</label>
              <textarea className="form-input" placeholder="Tell me about the opportunity..." rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required/>
            </div>
            <button type="submit" className="btn btn-primary" style={{width:'100%'}}>
              <Send size={16}/> {sent ? 'Opening email client...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
