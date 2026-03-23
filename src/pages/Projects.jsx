import { Link } from 'react-router-dom';
import paloraImg from '../Capture d\'écran 2026-01-26 114421.png';
import voltigoImg from '../Capture d\'écran 2026-01-05 034531.png';
import qrCodeImg from "../qr-code (2).png";

const Projects = () => {
  // Array للمشاريع: غير دير كوبي لهاد الجزء باش تزيد مشروع جديد
  const projectsData = [
    {
      id: 1,
      title: "PaLora SaaS Platform",
      description: "🤫 We work quietly to make a global noise.. An innovative digital system that reinvents the concept of services. 🚀 Coming soon from Morocco to the world.",
      // عوض الـ QR، غادي نديرو الأيقونة واللون ديالها
      statusIcon: "fa-hourglass-half", 
      statusText: "Coming Soon",
      image: paloraImg,
      link: "#",
      tech: ["React", "Tailwind", "Node.js", "..."]
    },
    { 
      id: 2,
      title: "Marketing Intelligence Tool",
      description: "From the very first line of code with HTML and Tailwind CSS, I designed the experimental interface for Voltigo1 to display products with JavaScript. Currently, I am focusing on completing the PaLora project, after which I will return to fully developing Voltigo1 using React, transforming it from an ambitious idea into a fully professional platform.",
      image: voltigoImg,
      qrCode: qrCodeImg,
      link: "https://e-commerce-gmrm.vercel.app/",
      tech: ["HTMLC", "Taillwind css", "js"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24 animate-float">
          <h2 className="text-yellow-500 font-mono tracking-[0.6em] uppercase text-[10px] mb-4">Innovation Portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tighter">My <span className="text-yellow-500 italic uppercase text-4xl md:text-6xl">Projects</span></h1>
          <div className="w-24 h-[1px] bg-yellow-500 mx-auto shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
        </div>

        {/* Projects Container */}
        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`flex flex-col lg:flex-row gap-16 items-center animate-float delay-${index + 1}`}
            >
              
              {/* Image Section WITH QR CODE ON TOP */}
              <div className="w-full lg:w-3/5 relative group">
                
                {/* The QR Code (Floating on top right of the image) */}
                <div className="absolute -top-6 -right-6 z-20 bg-white p-2 rounded-2xl shadow-2xl glow-card animate-float delay-2 transform group-hover:scale-110 transition-transform duration-500">
                  <img src={project.qrCode} alt="Scan Project" className="w-20 h-20" />
                  <p className="text-[7px] text-black font-black text-center mt-1 uppercase tracking-tighter">Scan to View</p>
                </div>

                {/* Main Project Image */}
                <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 aspect-video shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Hover Link Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-yellow-500 text-black px-10 py-3 rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-white transition-all shadow-xl shadow-yellow-500/20"
                    >
                      EXPLORE MY WORLD"<i className="fas fa-external-link-alt ml-2 text-[8px]"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-serif font-bold text-white group-hover:text-yellow-500 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[8px] font-bold uppercase tracking-widest text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full bg-yellow-500/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed text-sm md:text-base border-l-2 border-yellow-500/30 pl-6 py-2 italic font-light">
                  {project.description}
                </p>

                <div className="pt-4">
                   <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-6 group text-white font-black uppercase text-[10px] tracking-[0.4em] hover:text-yellow-500 transition-colors"
                   >
                     EXPLORE MY WORLD"
                     <span className="w-16 h-[1px] bg-yellow-500 group-hover:w-24 transition-all"></span>
                   </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-40 text-center border-t border-white/5 pt-20">
          <p className="text-slate-500 font-mono text-[9px] uppercase tracking-[0.5em] mb-8">End of Portfolio</p>
          <Link to="/contact" className="px-14 py-5 bg-transparent border border-yellow-500 text-yellow-500 font-black uppercase text-[11px] tracking-[0.3em] rounded-full hover:bg-yellow-500 hover:text-black transition-all shadow-2xl">
            Start a Conversation
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Projects;