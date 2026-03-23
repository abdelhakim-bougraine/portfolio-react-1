const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Branding Area */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold text-white tracking-wider">
              ABDELHAKIM <span className="text-blue-500">BOUGRAINE</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1 uppercase tracking-tighter">
              Marketing Analyst & Full Stack Developer
            </p>
          </div>
  
          {/* Social Links Based on your CV */}
          <div className="flex gap-6">
            <a href="https://github.com/abdelhakim-bougraine" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="https://linkedin.com/in/abdelhakim-bougraine" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">LinkedIn</a>
            <a href="mailto:bougrane200@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">Email</a>
          </div>
  
          {/* Copyright */}
          <div className="text-slate-500 text-xs font-mono">
            © {currentYear} | Built with <span className="text-blue-500">React</span> & <span className="text-cyan-400">Tailwind</span>
          </div>
  
        </div>
      </footer>
    );
  };
  
  export default Footer; // هاد السطر هو "البطل" اللي غيحيد ليك الـ Error