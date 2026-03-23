import { Link } from 'react-router-dom';

const Experience = () => {
  const experienceData = [
    {
      period: "10/2025-en cours",
      role: "Founder & Lead Developer",
      company: "PaLora (SaaS Project)",
      description: "Stay tuned for the upcoming launch of PaLora, the digital system that will redefine the features of services in the Moroccan market as a first step towards international leadership. We are not launching just a project, but framing a new phase of technical efficiency. The future starts here, so wait for us. We work quietly to make a noise in the global market.",
      icon: "fa-layer-group",
      color: "from-yellow-500 to-orange-500"
    },
    {
      period: "05/2025-en cours",
      role: "Co-Founder & Marketing Strategist",
      company: "Voltigo1 (E-commerce Business)",
      description: "Voltigo1 started as a personal dream and a spark of ambition in May 2025, and today it has turned into a solid strategic partnership with a companion who devoted all his effort to expanding this entity. We don't just run an electronics store; we are building a real success story in which we apply our academic expertise in Marketing Analysis through carefully planned advertising campaigns and precise market data analysis. We work passionately to develop our capital and expand our customer base, paving the way for our next step: establishing our own commercial headquarters and elevating Voltigo1 to global horizons.",
      icon: "fa-bolt",
      color: "from-yellow-400 to-orange-600"
    },
    {
      period: "August 2025 - Present",
      role: "Security & Surveillance Agent",
      company: "Professional Security Services",
      description: "Ensuring high-level safety and surveillance protocols. Developed exceptional discipline, vigilance, and the ability to manage professional responsibilities under pressure.",
      icon: "fa-shield-halved",
      color: "from-blue-600 to-indigo-400"
    },
  
    {
      period: "2025-en cours",
      role: "Freelance Web Developer",
      company: "Digital Solutions",
      description: "Delivering custom web applications for local clients, focusing on UI/UX optimization and responsive layouts using React and Tailwind CSS.",
      icon: "fa-laptop-code",
      color: "from-emerald-500 to-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Dynamic Background Glows */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-yellow-600/5 blur-[120px] rounded-full -z-10"></div>

      <div className="max-w-5xl mx-auto relative">
        
        {/* Header Section */}
        <div className="text-center mb-24 animate-float">
          <h2 className="text-yellow-500 font-mono tracking-[0.6em] uppercase text-[10px] mb-4">Professional Journey</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-linear-to-b from-yellow-100 via-yellow-400 to-yellow-700">Experience</span>
          </h1>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full shadow-[0_0_20px_rgba(212,175,55,0.8)]"></div>
        </div>

        {/* Experience Cards Grid */}
        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <div 
              key={index} 
              className={`group relative flex flex-col md:flex-row gap-8 items-start p-8 bg-slate-900/40 border border-white/5 rounded-[2.5rem] backdrop-blur-xl hover:border-yellow-500/30 transition-all duration-500 animate-float delay-${index + 1}`}
            >
              {/* Icon Container with Glow */}
              <div className="relative shrink-0">
                <div className={`w-20 h-20 rounded-3xl bg-slate-800 flex items-center justify-center border border-white/10 glow-card group-hover:scale-110 transition-transform`}>
                  <i className={`fas ${exp.icon} text-3xl text-yellow-500`}></i>
                </div>
                {/* Background Shadow per card */}
                <div className="absolute inset-0 bg-yellow-500/10 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors uppercase tracking-tight italic">
                      {exp.role}
                    </h3>
                    <p className="text-yellow-600 font-mono text-xs font-black uppercase tracking-widest mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-4 py-1 rounded-full border border-white/10 text-[10px] font-bold text-slate-400 bg-white/5 self-start">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-slate-400 leading-relaxed text-sm md:text-base border-l-2 border-yellow-500/20 pl-6 py-2 group-hover:border-yellow-500 transition-colors">
                  {exp.description}
                </p>
              </div>

              {/* Corner Accent Decor */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${exp.color} opacity-5 blur-[50px] rounded-full group-hover:opacity-10 transition-opacity`}></div>
            </div>
          ))}
        </div>

        {/* Professional Footer CTA */}
        <div className="mt-24 text-center">
          <div className="inline-block p-[1px] rounded-full bg-linear-to-r from-transparent via-yellow-500/50 to-transparent">
            <div className="bg-[#050a15] px-12 py-8 rounded-full">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-[0.4em] mb-4 italic">Commitment & Innovation</p>
              <Link to="/contact" className="text-white hover:text-yellow-500 transition-colors font-black uppercase text-xs tracking-[0.2em] border-b-2 border-yellow-500 pb-2">
                Let's discuss my expertise
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Experience;