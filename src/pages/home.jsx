import { Link } from 'react-router-dom';
import profilePic from "../profile.jpeg";
const Home = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#050a15] overflow-hidden">
      
      {/* 1. تأثير شبكة العنكبوت (Spider Web Background) */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
           style={{ 
             backgroundImage: 'radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>

      {/* 2. تأثيرات التوهج الخلفية (Glow Background) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-600/15 blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-yellow-600/15 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-6">
        
        {/* 3. الصورة الشخصية مع التوهج الذهبي (Profile Glow) */}
        <div className="relative inline-block mb-10">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden mx-auto border-4 border-[#d4af37] shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-all duration-700 hover:scale-105 group ring-8 ring-yellow-500/10">
            <img 
              
  src={profilePic} 
  alt="Abdelhakim Bougraine" 
  className="w-full h-full object-cover transform group-hover:scale-110 transition-duration-700"

            />
          </div>
          {/* أيقونة الميدالية الصغير */}
          <div className="absolute bottom-4 right-6 bg-[#d4af37] text-slate-950 w-12 h-12 rounded-full flex items-center justify-center border-4 border-[#050a15] shadow-2xl">
             <span className="text-xl">🏅</span>
          </div>
        </div>

        {/* 4. النصوص (Typography) */}
        <h2 className="text-[#d4af37] font-mono tracking-[0.5em] uppercase text-[10px] md:text-xs mb-6 font-bold">
          Expertise en Développement & Marketing
        </h2>
        
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-8 tracking-tight leading-tight">
          Abdelhakim <span className="text-transparent bg-clip-text bg-linear-to-b from-yellow-200 via-yellow-500 to-yellow-800">Bougraine</span>
        </h1>
        
        {/* 5. شارات المهارات (Skill Badges) */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <span className="px-5 py-2 bg-slate-900/40 border border-yellow-600/20 rounded-xl flex items-center text-gray-300 text-sm backdrop-blur-md">
            <span className="text-yellow-500 mr-3">⚡</span> Full Stack Dev
          </span>
          <span className="px-5 py-2 bg-slate-900/40 border border-yellow-600/20 rounded-xl flex items-center text-gray-300 text-sm backdrop-blur-md">
            <span className="text-yellow-500 mr-3">📈</span> Marketing Analyst
          </span>
        </div>

        {/* 6. أزرار التواصل (Action Buttons) */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link to="/projects" className="w-full sm:w-auto px-12 py-4 bg-[#d4af37] text-[#050a15] font-black rounded-2xl shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:shadow-yellow-500/60 transition-all hover:-translate-y-1 uppercase tracking-[0.15em] text-xs">
             Mes Réalisations
          </Link>
          <Link to="/about" className="w-full sm:w-auto px-12 py-4 border-2 border-yellow-600/40 text-[#d4af37] font-bold rounded-2xl hover:bg-yellow-600/10 transition-all backdrop-blur-lg text-xs uppercase tracking-widest">
            Mon Profil
          </Link>
        </div>

        {/* 7. أيقونات السوشيال ميديا (Social Icons) */}
        <div className="mt-20 flex justify-center space-x-12">
          <a href="https://github.com/abdelhakim-bougraine" target="_blank" className="text-slate-500 hover:text-[#d4af37] text-2xl transition-all transform hover:scale-125">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/abdelhakim-bougraine" target="_blank" className="text-slate-500 hover:text-[#d4af37] text-2xl transition-all transform hover:scale-125">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:bougrane200@gmail.com" className="text-slate-500 hover:text-[#d4af37] text-2xl transition-all transform hover:scale-125">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;