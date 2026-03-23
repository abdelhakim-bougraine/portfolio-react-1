import { Link } from 'react-router-dom';

const Contact = () => {
  const socialLinks = [
    { 
      name: "WhatsApp", 
      icon: "fa-whatsapp", 
      type: "fab", 
      color: "text-[#25D366]", 
      glow: "shadow-[0_0_30px_rgba(37,211,102,0.4)]",
      link: "https://wa.me/212600000000", 
      desc: "Instant Strategy Call"
    },
    { 
      name: "LinkedIn", 
      icon: "fa-linkedin-in", 
      type: "fab", 
      color: "text-[#0077B5]", 
      glow: "shadow-[0_0_30px_rgba(0,119,181,0.4)]",
      link: "https://linkedin.com/in/abdelhakim-bougraine",
      desc: "Corporate Partnerships"
    },
    { 
      name: "Email", 
      icon: "fa-envelope", 
      type: "fas", 
      color: "text-[#EA4335]", 
      glow: "shadow-[0_0_30px_rgba(234,67,53,0.4)]",
      link: "mailto:abdelhakim@example.com",
      desc: "Direct Business Inquiry"
    },
    { 
      name: "GitHub", 
      icon: "fa-github", 
      type: "fab", 
      color: "text-white", 
      glow: "shadow-[0_0_30px_rgba(255,255,255,0.2)]",
      link: "https://github.com/Abdelhakim-Bougraine",
      desc: "Technical Architecture"
    },
    { 
      name: "Instagram", 
      icon: "fa-instagram", 
      type: "fab", 
      color: "text-[#E4405F]", 
      glow: "shadow-[0_0_25px_rgba(228,64,95,0.4)]",
      link: "https://instagram.com/your-profile",
      desc: "Work & Creativity"
    },
    { 
      name: "Facebook", 
      icon: "fa-facebook-f", 
      type: "fab", 
      color: "text-[#1877F2]", 
      glow: "shadow-[0_0_25px_rgba(24,119,242,0.4)]",
      link: "https://facebook.com/your-profile",
      desc: "Official Updates"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-white pt-32 pb-20 px-6 relative overflow-hidden selection:bg-yellow-500/30">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-yellow-600/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 animate-float">
          
          {/* 1. Time is Money - Balanced in One Line */}
          <h2 className="text-[#25D366] font-black tracking-[0.4em] uppercase text-xl md:text-3xl mb-6 flex items-center justify-center gap-4 drop-shadow-[0_0_15px_rgba(37,211,102,0.4)]">
            <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping"></span>
            Time is Money
            <span className="w-2 h-2 bg-[#25D366] rounded-full animate-ping"></span>
          </h2>

          {/* 2. Stop Wasting Time - Clear & Professional */}
          <h3 className="text-white font-mono text-lg md:text-2xl uppercase tracking-[0.3em] mb-8 font-bold">
            Stop Wasting Time.
          </h3>

          {/* 3. One Step Away - Elegant & Smaller */}
          <div className="space-y-1 mb-12">
            <h1 className="text-xl md:text-3xl font-serif font-medium tracking-tight text-slate-300">
              You're <span className="text-yellow-500 italic">One Step Away</span>
            </h1>
            <h1 className="text-xl md:text-3xl font-serif font-medium tracking-tight text-slate-300">
              From the Best Choice.
            </h1>
          </div>

          <div className="w-12 h-[1px] bg-yellow-500/30 mx-auto mb-10"></div>
          
          {/* 4. The Power Sentence - High-Level & Concise */}
          <div className="max-w-3xl mx-auto px-4">
            <p className="text-slate-400 text-sm md:text-base font-light tracking-[0.1em] leading-relaxed uppercase">
              "Market dominance belongs to the swift. <br /> 
              <span className="text-white font-bold">
                Bridge the gap with elite <span className="text-yellow-500 underline decoration-yellow-500/30 underline-offset-8">Code Engineering</span> & <span className="text-yellow-500 underline decoration-yellow-500/30 underline-offset-8">Growth Strategies</span>."
              </span>
            </p>
          </div>
        </div>

        {/* Social Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-10 bg-slate-900/30 border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-700 hover:border-yellow-500/40 hover:-translate-y-4 animate-float delay-${(index % 3) + 1}`}
            >
              {/* Neon Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 border border-white/5 ${social.glow} group-hover:scale-110 transition-all duration-500`}>
                <i className={`${social.type} ${social.icon} ${social.color} text-2xl`}></i>
              </div>

              {/* Text Info */}
              <h3 className="text-[10px] font-black tracking-[0.3em] uppercase mb-1">{social.name}</h3>
              <p className="text-[8px] font-mono text-slate-500 uppercase tracking-widest text-center">{social.desc}</p>
              
              {/* Glow Aura */}
              <div className="absolute inset-0 bg-yellow-500/[0.01] opacity-0 group-hover:opacity-100 blur-3xl rounded-full -z-10 transition-opacity"></div>
            </a>
          ))}
        </div>

        {/* Clean Footer Copy - Minimalist */}
        <div className="text-center pt-16 border-t border-white/5 opacity-40">
           <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.5em] flex items-center justify-center gap-4">
              <span>© 2026</span>
              <span className="w-1 h-1 bg-yellow-600 rounded-full"></span>
              <span>Abdelhakim Bougraine</span>
              <span className="w-1 h-1 bg-yellow-600 rounded-full"></span>
              <span>Precision & Innovation</span>
           </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;