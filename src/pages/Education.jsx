import { Link } from 'react-router-dom';

const Education = () => {
  const educationData = [
    {
      year: "2025 - 2026",
      title: "Full Stack Web Development",
      institution: "Nouaceur Wings - JADARA",
      description: "Professional training in Full Stack Web Development, through which I am learning the fundamentals of web development (front-end and back-end), with a focus on gradually developing my technical skills.",
      icon: "fa-code",
      color: "from-blue-500 to-cyan-400"
    },
    {
      year: "2026-2025",
      title: "DTS en Analyse Marketing",
      institution: "IFIAG Vocational School, Casablanca",
      description: "Specialized training focused on market research, consumer behavior analysis, and marketing strategy development. Acquired technical skills in data interpretation to support business decision-making and campaign optimization.",
      icon: "fa-chart-pie",
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2023 – 2025 (En cours)",
      title: "DEUG en Commerce et Marketing",
      institution: "FSJES Ain Chock, Casablanca",
      description: "A university study focusing on the theoretical foundations of commerce, economics, and marketing management, to deepen academic understanding of the business field.",
      icon: "fa-graduation-cap",
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2024 - 2025",
      title: "Coaching Personnel et Professionnel",
      institution: "IFIAG Vocational School, Casablanca",
      description: "Developing communication, leadership, and professional psychological analysis skills to enhance individual and group performance in the marketing work environment",
      icon: "fa-chart-pie",
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "Juin 2024",
      title: "Formation en Intelligence Artificielle",
      institution: "IFIAG Vocational School, Casablanca",
      description: "A training course on the fundamentals of artificial intelligence and its modern applications in data analysis and improving professional efficiency.",
      icon: "fa-chart-pie",
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2022 – 2023",
      title: "Baccalauréat en Sciences Physiques",
      institution: "Ibn Khafaja High School - Dar Bouazza",
      description: "Baccalaureate Certificate - Physical Sciences Track (in Arabic)",
      icon: "fa-chart-pie",
      color: "from-yellow-500 to-orange-500"
    },
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-white pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-yellow-900/10 -z-10"></div>

      <div className="max-w-4xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-20 animate-float">
          <h2 className="text-yellow-500 font-mono tracking-[0.5em] uppercase text-xs mb-4">Academic Path</h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-tighter">
            My <span className="text-transparent bg-clip-text bg-linear-to-b from-yellow-200 to-yellow-600">Education</span>
          </h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,1)]"></div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2">
          
          {educationData.map((edu, index) => (
            <div key={index} className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'} group`}>
              
              {/* Floating & Glowing Icon */}
              <div className={`absolute top-0 -left-[31px] md:left-auto ${index % 2 === 0 ? 'md:-left-[21px]' : 'md:-right-[21px]'} w-10 h-10 rounded-full bg-slate-900 border-2 border-yellow-500 flex items-center justify-center glow-card animate-float delay-${index + 1} z-20`}>
                <i className={`fas ${edu.icon} text-yellow-500 text-sm`}></i>
              </div>

              {/* Education Card */}
              <div className="bg-slate-900/40 backdrop-blur-xl border border-white/5 p-8 rounded-[2rem] hover:border-yellow-500/40 transition-all duration-500 group-hover:-translate-y-3 relative overflow-hidden">
                
                {/* Decoration Gradient */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-linear-to-b ${edu.color} opacity-50`}></div>

                <span className="text-yellow-500 font-mono text-xs font-bold tracking-widest block mb-2">
                  {edu.year}
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                  {edu.title}
                </h3>
                <h4 className="text-slate-300 font-medium mb-4 text-sm uppercase tracking-wider">
                  {edu.institution}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {edu.description}
                </p>

                {/* Background Shadow Effect */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-500/5 blur-3xl group-hover:bg-yellow-500/10 transition-all rounded-full"></div>
              </div>
            </div>
          ))}

        </div>

        {/* Final Touch */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-8">Continuous Learning is the key to success</p>
          <Link to="/contact" className="px-8 py-3 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full hover:bg-yellow-500 transition-all">
            Get My Full CV
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Education;