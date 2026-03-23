import { Link } from 'react-router-dom';

const About = () => {
  // 1. Web Development Stack مع الألوان الحقيقية
  const devStack = [
    { name: "HTML5", icon: "fa-html5", color: "text-[#E34F26]", delay: "delay-1" },
    { name: "CSS3", icon: "fa-css3-alt", color: "text-[#1572B6]", delay: "delay-2" },
    { name: "Tailwind", icon: "fa-leaf", color: "text-[#06B6D4]", delay: "delay-3" }, // Tailwind icon
    { name: "JavaScript", icon: "fa-square-js", color: "text-[#F7DF1E]", delay: "delay-1" },
    { name: "React", icon: "fa-react", color: "text-[#61DAFB]", delay: "delay-2" },
    { name: "Next.js", icon: "fa-diamond", color: "text-white", delay: "delay-3" }, 
    { name: "Node.js", icon: "fa-node-js", color: "text-[#339933]", delay: "delay-1" },
    { name: "Express", icon: "fa-server", color: "text-[#828282]", delay: "delay-2" },
    { name: "GitHub", icon: "fa-github", color: "text-white", delay: "delay-3" }
  ];

  // 2. Design & Office Tools
  const officeStack = [
    { name: "Excel", icon: "fa-file-excel", color: "text-[#1D6F42]", delay: "delay-1" },
    { name: "Word", icon: "fa-file-word", color: "text-[#2B579A]", delay: "delay-2" },
    { name: "PowerPoint", icon: "fa-file-powerpoint", color: "text-[#D24726]", delay: "delay-3" },
    { name: "Photoshop", icon: "fa-palette", color: "text-[#31A8FF]", delay: "delay-1" }
  ];

  // 3. Marketing Competences
  const marketingSkills = [
    { name: "Digital Marketing", icon: "fa-bullhorn", color: "text-orange-400", delay: "delay-2" },
    { name: "Project Management", icon: "fa-list-check", color: "text-blue-400", delay: "delay-3" },
    { name: "Comm. Strategy", icon: "fa-comments-dollar", color: "text-green-400", delay: "delay-1" }
  ];

  // 4. Soft Skills
  const softSkills = [
    { name: "Team Spirit", icon: "fa-users", color: "text-cyan-400" },
    { name: "Adaptability", icon: "fa-arrows-rotate", color: "text-purple-400" },
    { name: "Creativity", icon: "fa-lightbulb", color: "text-yellow-400" },
    { name: "Management", icon: "fa-briefcase", color: "text-amber-600" },
    { name: "Negotiation", icon: "fa-handshake", color: "text-emerald-400" },
    { name: "Critical Thinking", icon: "fa-brain", color: "text-pink-400" },
    { name: "Leadership", icon: "fa-crown", color: "text-yellow-500" }
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-white pt-28 pb-16 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <h2 className="text-yellow-500 font-mono tracking-[0.4em] uppercase text-xs mb-4">Competences & Skills</h2>
          <h1 className="text-5xl font-serif font-bold mb-6 italic">About <span className="text-yellow-500">Me</span></h1>
          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed">
            Combining Marketing Intelligence with Full Stack Development to build high-performance digital products.
          </p>
        </div>

        {/* 1. Web Dev Stack (Wavy Effect) */}
        <div className="mb-20">
          <h3 className="text-xl font-bold mb-12 flex items-center gap-4 border-b border-white/5 pb-4">
             <i className="fas fa-terminal text-blue-500"></i> Web Development Stack
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {devStack.map((s, i) => (
              <div key={i} className={`flex flex-col items-center animate-float ${s.delay}`}>
                <div className="w-16 h-16 bg-slate-900/60 border border-white/10 rounded-[1.5rem] flex items-center justify-center mb-3 shadow-xl hover:border-yellow-500/50 transition-all">
                  <i className={`fab ${s.icon} ${s.color} text-3xl`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Office & Design */}
        <div className="mb-20">
          <h3 className="text-xl font-bold mb-12 flex items-center gap-4 border-b border-white/5 pb-4">
             <i className="fas fa-desktop text-pink-500"></i> Design & Office
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {officeStack.map((s, i) => (
              <div key={i} className={`flex flex-col items-center animate-float ${s.delay}`}>
                <div className="w-16 h-16 bg-slate-900/60 border border-white/10 rounded-[1.5rem] flex items-center justify-center mb-3 shadow-xl">
                  <i className={`fas ${s.icon} ${s.color} text-3xl`}></i>
                </div>
                <span className="text-[10px] font-black uppercase tracking-tighter text-slate-500">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Marketing & Management */}
        <div className="mb-20">
          <h3 className="text-xl font-bold mb-12 flex items-center gap-4 border-b border-white/5 pb-4">
             <i className="fas fa-chart-line text-orange-500"></i> Marketing & Management
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketingSkills.map((s, i) => (
              <div key={i} className={`flex items-center gap-4 p-6 bg-slate-900/40 rounded-3xl border border-white/5 animate-float ${s.delay}`}>
                <i className={`fas ${s.icon} ${s.color} text-2xl`}></i>
                <span className="font-bold uppercase text-xs tracking-widest">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Soft Skills (Clean Grid) */}
        <div className="mb-24">
          <h3 className="text-xl font-bold mb-12 flex items-center gap-4 border-b border-white/5 pb-4">
             <i className="fas fa-user-check text-green-500"></i> Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {softSkills.map((s, i) => (
              <div key={i} className="p-4 bg-slate-900/20 border border-white/5 rounded-2xl flex flex-col items-center group hover:bg-yellow-500/5 transition-all">
                <i className={`fas ${s.icon} ${s.color} text-xl mb-2 group-hover:scale-125 transition-transform`}></i>
                <span className="text-[9px] font-bold uppercase text-slate-400 text-center">{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center py-10">
           <Link to="/contact" className="px-10 py-4 border border-yellow-500/30 text-yellow-500 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-yellow-500 hover:text-black transition-all">
             Let's Connect
           </Link>
        </div>

      </div>
    </div>
  );
};

export default About;